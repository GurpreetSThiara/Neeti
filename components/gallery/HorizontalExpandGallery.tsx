"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import styles from "./HorizontalExpandGallery.module.css"

const images = [
  {
    id: 3,
    src: "https://res.cloudinary.com/dppbhby1g/image/upload/v1750181594/20240511_131436600_iOS_fcbsld.jpg",
    title: "Maharashtra",
    category: "War-Room Consulting",
    description:
      "During our engagement with Shri Ajit Pawar ji, Deputy Chief Minister of Maharashtra and a prominent leader in state politics, Team Neeti Collective worked closely to enhance his public presence through sharp, issue-based communication and on-ground coverage. Our team captured his mass connect events, developmental inaugurations, and political addresses across the state, translating them into high-impact digital content tailored for diverse audiences. By showcasing his administrative experience, grassroots influence, and strong regional leadership, we helped shape a narrative that resonated deeply with both urban and rural voters — positioning Ajit Dada as a decisive, people-first leader in Maharashtra’s evolving political landscape.",
    overlayClass: styles.overlay_maharashtra,
    accentClass: styles.accent_maharashtra,
    buttonStyle: { background: "linear-gradient(to right, #1a365d, #3b82f6)" },
    dotColor: "#3b82f6",
  },
  {
    id: 1,
    src: "https://res.cloudinary.com/dppbhby1g/image/upload/v1750181596/WhatsApp_Image_2024-05-01_at_1.17.12_PM_voqgpj.jpg",
    title: "Rajasthan",
    category: "Narrative & Welfare Strategy",
    description:
      "During the Rajasthan Assembly Elections 2023, Neeti Collective had the privilege of contributing to the campaign of Chief Minister Shri Ashok Gehlot ji. Our team played a key role in capturing ground-level visuals from rallies, constituency visits, and public interactions, turning them into impactful digital narratives. We focused on highlighting his governance achievements — including flagship initiatives like the Chiranjeevi Yojana, Indira Rasoi, and women-centric welfare schemes — through real-time content creation and regionally resonant storytelling. This collaboration underscored our ability to amplify legacy leadership through authentic visual communication and strategic digital outreach.",
    overlayClass: styles.overlay_rajasthan,
    accentClass: styles.accent_rajasthan,
    buttonStyle: { background: "linear-gradient(to right, #b85a10, #f97316)" },
    dotColor: "#f97316",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dppbhby1g/image/upload/v1750181586/20240326123417_IMG_7167_ic33y4.jpg",
    title: "Karnataka",
    category: "Grassroots Mobilization",
    description:
      "During our collaboration with Shri D.K. Shivakumar ji, Deputy Chief Minister of Karnataka and a key strategist in the state’s political landscape, Team Neeti Collective played a vital role in documenting and amplifying his leadership journey during critical phases of the campaign. Our team provided real-time coverage of his public engagements, mass mobilization efforts, and party-building activities, capturing the scale and intensity of his ground presence. Through compelling visuals and region-specific digital content, we highlighted his role in strengthening the Congress party’s resurgence in Karnataka, reinforcing his image as a dynamic, grassroots-connected, and results-driven leader.",
    overlayClass: styles.overlay_karnataka,
    accentClass: styles.accent_karnataka,
    buttonStyle: { background: "linear-gradient(to right, #0d7864, #14b8a6)" },
    dotColor: "#14b8a6",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dppbhby1g/image/upload/v1750181385/a5419e3f-b313-4590-b86c-b337216c91d4_caubap.jpg",
    title: "Andhra Pradesh",
    category: "Electoral Intelligence",
    description:
      "In Andhra Pradesh, Team Neeti Collective had the opportunity to support the YSR Congress Party (YSRCP) and Rajya Sabha MP Shri Vijay Sai Reddy during key campaign phases. Our team focused on creating dynamic, visually compelling content that highlighted the party’s welfare-driven governance and Vijay Sai Reddy's proactive public outreach. From documenting his constituency visits and development-focused initiatives to amplifying his presence across digital platforms, we crafted narratives that reflected the YSRCP’s grassroots connect and credibility. This collaboration demonstrated our ability to navigate Andhra’s regional nuances and deliver communication that resonated with both rural and urban voters, reinforcing the party’s position as a people-first political force.",
    overlayClass: styles.overlay_andhra,
    accentClass: styles.accent_andhra,
    buttonStyle: { background: "linear-gradient(to right, #334155, #64748b)" },
    dotColor: "#64748b",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dppbhby1g/image/upload/v1750181596/WhatsApp_Image_2024-05-01_at_1.17.14_PM_a9dv4p.jpg",
    title: "Punjab",
    category: "Constituency Management",
    description:
      "In Punjab, Team Neeti Collective had the opportunity to work with a diverse set of influential leaders including Shri Ravneet Singh Bittu, Smt. Preneet Kaur, and Shri Jagdish Singh Jagga during key political campaigns. Our team was actively involved in crafting localized content strategies, documenting high-energy ground events, and amplifying the leaders’ constituency work across digital platforms. By tailoring narratives to reflect each leader’s legacy, public service record, and regional priorities, we effectively connected them with their voter base. Whether it was highlighting Ravneet Bittu’s strong youth connect, Preneet Kaur’s dignified leadership in Patiala, or Jagdish Jagga’s on-ground presence in rural belts, our storytelling helped reinforce their credibility and commitment to Punjab’s people.",
    overlayClass: styles.overlay_punjab,
    accentClass: styles.accent_punjab,
    buttonStyle: { background: "linear-gradient(to right, #047857, #10b981)" },
    dotColor: "#10b981",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dppbhby1g/image/upload/v1750181386/c376bb58-8829-4a03-a494-ce1cea213f6c_r2upzi.jpg",
    title: "Uttar Pradesh",
    category: "Strategic Advisory",
    description:
      "During the 2019 Uttar Pradesh Assembly Elections and the 2021 Rajya Sabha Elections, Neeti Collective worked closely with senior leaders from both BJP and Congress, including Shri Sanjay Sinh and Smt. Ameeta Sinh. Our team developed constituency-specific outreach strategies, executed real-time ground documentation, and produced impactful visual content that highlighted their leadership, legacy, and connect with the people. From amplifying BJP narratives in key constituencies to supporting Congress leaders in their electoral efforts, we brought deep regional insight and media precision to every campaign. This cross-party experience demonstrated our versatility in navigating Uttar Pradesh’s complex political terrain and creating meaningful engagement across diverse voter bases.",
    overlayClass: styles.overlay_uttar_pradesh,
    accentClass: styles.accent_uttar_pradesh,
    buttonStyle: { background: "linear-gradient(to right, #a16207, #eab308)" },
    dotColor: "#eab308",
  },
];

export default function HorizontalExpandGallery() {
	const [hoveredImage, setHoveredImage] = useState(3)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<div className={styles.galleryWrapper}>
			<div className={styles.galleryContainer}>
				{images.map((image) => {
					const isExpanded = hoveredImage === image.id
					return (
						<div
							key={image.id}
							className={`${styles.card} ${isExpanded ? styles.cardActive : ""}`}
							onMouseEnter={() => setHoveredImage(image.id)}
							onClick={() => setHoveredImage(image.id)}
						>
							{/* Image */}
							<Image
								src={image.src || "/placeholder.svg"}
								alt={image.title}
								fill
								sizes="(max-width: 768px) 100vw, 33vw"
								className={styles.cardImage}
								priority={image.id === 3}
							/>

							{/* Base gradient shadow */}
							<div className={styles.overlayBase} />

							{/* Dynamic state gradient overlay */}
							<div className={`${styles.overlayColor} ${image.overlayClass}`} />

							{/* Animated top accent line */}
							<div className={`${styles.accentLine} ${image.accentClass}`} />

							{/* Expanded content */}
							<div className={styles.expandedContent}>
								<div className={styles.contentWrapper}>
									<div className={styles.badge}>
										{image.category}
									</div>
									<h3 className={styles.cardTitle}>
										{image.title}
									</h3>
									<p className={styles.cardDesc}>
										{image.description}
									</p>
									<div className={styles.buttonRow}>
										<Link 
											href="/case-studies" 
											className={styles.exploreBtn}
											style={image.buttonStyle}
										>
											Request Briefing
										</Link>
										<Link href="/case-studies" className={styles.circleBtn} aria-label={`Read case study for ${image.title}`}>
											<ArrowRight />
										</Link>
									</div>
								</div>
							</div>

							{/* Collapsed state vertically rotated text */}
							<div className={styles.collapsedContent}>
								<div className={styles.collapsedInner}>
									<h3 className={styles.collapsedTitle}>
										{image.title}
									</h3>
									<div 
										className={styles.collapsedDot} 
										style={{ color: image.dotColor }}
									/>
								</div>
							</div>
						</div>
					)
				})}
			</div>

			{/* Custom styled navigation indicator dots */}
			<div className={styles.dotsContainer}>
				{images.map((image) => (
					<button
						key={image.id}
						onClick={() => setHoveredImage(image.id)}
						className={`${styles.dot} ${hoveredImage === image.id ? styles.dotActive : ""}`}
						aria-label={`Show ${image.title}`}
					/>
				))}
			</div>
		</div>
	)
}