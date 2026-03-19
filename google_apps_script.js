// Google Apps Script to handle contact form submissions for Neeti Collective

const SHEET_NAME = 'Submissions';
const NOTIFICATION_EMAIL = 'arambhaniti@gmail.com'; // Replace with the actual email address

function doPost(e) {
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = doc.getSheetByName(SHEET_NAME);
    
    // If the sheet doesn't exist, create it and add headers
    if (!sheet) {
      sheet = doc.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Organization', 'Inquiry Type', 'Message']);
      // Format headers
      sheet.getRange("A1:F1").setFontWeight("bold");
    }

    // Parse incoming JSON data. Next.js fetch sends JSON string.
    const data = JSON.parse(e.postData.contents);
    
    // Extract fields
    const timestamp = new Date();
    const name = data.name || '';
    const email = data.email || '';
    const organization = data.organization || '';
    const inquiry = data.inquiry || '';
    const message = data.message || '';

    // Append a new row with the data
    sheet.appendRow([timestamp, name, email, organization, inquiry, message]);

    // Send an email notification
    const subject = `New Contact Form Submission: ${inquiry} - ${name}`;
    const htmlBody = `
      <h3>New Consultation Request from Neeti Collective Website</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>Inquiry Type:</strong> ${inquiry}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <br />
      <p><em>This email was generated from the Neeti Collective contact form.</em></p>
    `;

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      htmlBody: htmlBody,
      replyTo: email
    });

    // Return a success response
    // Using simple text/plain response as sometimes Google restricts CORS on JSON
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return an error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handling pre-flight OPTIONS request manually if required
function doOptions(e) {
  return ContentService.createTextOutput("");
}

// Simple test endpoint
function doGet(e) {
  return ContentService.createTextOutput("Neeti Collective Contact form script is active.");
}
