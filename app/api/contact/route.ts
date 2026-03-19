import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Ensure the environment variable is set in your .env.local or .env file
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_WEB_APP_URL;

    if (!scriptUrl) {
      console.error('GOOGLE_APPS_SCRIPT_WEB_APP_URL is not defined in environment variables.');
      return NextResponse.json(
        { result: 'error', message: 'Server configuration error: Web App URL missing' },
        { status: 500 }
      );
    }

    // Google Apps Script accepts POST requests. We use text/plain to avoid CORS preflight issues
    // if called from the client, though from the server side it matters less.
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.result === 'success') {
      return NextResponse.json({ result: 'success' });
    } else {
      console.error('Apps Script error:', result.error);
      return NextResponse.json(
        { result: 'error', message: 'Google Apps Script returned an error' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ result: 'error', message: 'Internal server error' }, { status: 500 });
  }
}
