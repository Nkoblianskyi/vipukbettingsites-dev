import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import { Header } from "@/components/header"

function PrivacySection({
  title,
  sectionId,
  children,
}: {
  title: string
  sectionId: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="border-b border-border px-5 py-4">
        <h2
          id={sectionId}
          className="font-heading font-bold text-base text-foreground"
        >
          {title}
        </h2>
      </div>
      <div
        className="px-5 py-4 text-sm text-muted-foreground leading-relaxed space-y-2"
        aria-labelledby={sectionId}
      >
        {children}
      </div>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

const dataCollected = [
  "IP address and approximate geographic region",
  "Browser type, version, and operating system",
  "Pages visited, time on site, and navigation path",
  "Cookie consent preferences",
  "Contact form submissions (where applicable)",
]

const dataUses = [
  "To personalise content and improve editorial relevance",
  "To analyse site traffic and optimise performance",
  "To measure the effectiveness of affiliate partnerships",
  "To respond to contact and privacy enquiries",
  "To fulfil legal and regulatory obligations under UK GDPR",
]

const userRights = [
  "Right of access — request a copy of data we hold about you",
  "Right to rectification — correct inaccurate or incomplete data",
  "Right to erasure — request deletion of your personal data",
  "Right to restriction — limit how we process your data",
  "Right to data portability — receive your data in a structured format",
  "Right to object — object to processing based on legitimate interests",
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <div className="bg-navy px-4 py-8 border-b border-white/10">
        <div className="container mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-primary transition-colors mb-4 tracking-wide"
            aria-label="Return to VIP UK Betting Sites rankings"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back to Rankings
          </Link>
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-8 h-8 bg-primary/15 border border-primary/25 rounded-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <Lock className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-white/45 text-xs mt-1 ml-11">
            vipukbettingsites.com · Last updated: January {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <main
        className="container mx-auto max-w-3xl px-4 py-8 space-y-4"
        aria-label="Privacy Policy content"
      >

        <PrivacySection title="Introduction" sectionId="vip-privacy-intro">
          <p>
            VIP UK Betting Sites (vipukbettingsites.com) is committed to protecting the privacy and personal data of every visitor. This Privacy Policy sets out how we collect, use, store, and protect your information in full compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
          <p>
            By using vipukbettingsites.com, you acknowledge and accept the practices described in this policy. This page applies exclusively to information gathered via this website. Linked third-party sites — including bookmaker operators — maintain their own separate privacy policies which we encourage you to review.
          </p>
        </PrivacySection>

        <PrivacySection title="Information We Collect" sectionId="vip-privacy-collect">
          <p>We may collect the following categories of data automatically when you visit our site:</p>
          <BulletList items={dataCollected} />
          <p className="mt-1">
            We do not request, store, or process sensitive personal categories such as financial data, health information, or identification documents.
          </p>
        </PrivacySection>

        <PrivacySection title="How We Use Your Data" sectionId="vip-privacy-use">
          <BulletList items={dataUses} />
        </PrivacySection>

        <PrivacySection title="Legal Basis for Processing" sectionId="vip-privacy-legal-basis">
          <p>
            We process personal data under the following lawful bases as defined by UK GDPR:
          </p>
          <BulletList items={[
            "Legitimate interests — improving site quality and affiliate performance measurement",
            "Consent — analytics and marketing cookies (where you have opted in)",
            "Legal obligation — compliance with applicable UK law",
          ]} />
        </PrivacySection>

        <PrivacySection title="Data Security & Protection" sectionId="vip-privacy-security">
          <p>
            We implement appropriate technical and organisational security measures to protect all personal data against unauthorised access, accidental loss, disclosure, or alteration. These include TLS/SSL encryption for all data in transit, access controls, and regular security reviews.
          </p>
          <p>
            Despite these measures, no internet transmission is fully secure. We encourage users to exercise caution when sharing personal information online.
          </p>
        </PrivacySection>

        <PrivacySection title="Data Retention" sectionId="vip-privacy-retention">
          <p>
            We retain personal data only for as long as is necessary to fulfil the purposes described in this policy, or as required by applicable law. Analytics data is retained in aggregated, anonymised form. Cookie consent records are retained for the period you remain a site visitor.
          </p>
        </PrivacySection>

        <PrivacySection title="Third Parties & Affiliate Links" sectionId="vip-privacy-third-party">
          <p>
            vipukbettingsites.com contains affiliate links to licensed UK bookmakers. When you click these links, third-party cookies and tracking technologies operated by those platforms may be activated, subject to their own privacy policies. We do not sell or share personally identifiable visitor data with any third party for commercial marketing purposes.
          </p>
        </PrivacySection>

        <PrivacySection title="Your Rights Under UK GDPR" sectionId="vip-privacy-rights">
          <p>As a UK data subject, you have the following rights:</p>
          <BulletList items={userRights} />
          <p className="mt-1">
            To exercise any of these rights, please contact us at the address below. We will respond within 30 days.
          </p>
        </PrivacySection>

        <PrivacySection title="Cookies" sectionId="vip-privacy-cookies">
          <p>
            We use cookies to enhance your browsing experience. For full details on the types of cookies we use and how to manage them, please refer to our{" "}
            <Link
              href="/cookie-policy"
              className="text-primary hover:underline underline-offset-2 font-medium"
              aria-label="Read our full Cookie Policy"
            >
              Cookie Policy
            </Link>. You can update your preferences at any time via the cookie consent banner or your browser settings.
          </p>
        </PrivacySection>

        <PrivacySection title="Policy Updates" sectionId="vip-privacy-updates">
          <p>
            This Privacy Policy may be revised periodically to reflect changes in our data practices or legal requirements. The &ldquo;Last updated&rdquo; date at the top of this page will indicate the most recent revision. Continued use of vipukbettingsites.com after changes are published constitutes your acceptance of the updated policy.
          </p>
        </PrivacySection>

        {/* Contact card */}
        <div
          className="bg-surface border border-border rounded-xl px-5 py-4"
          role="contentinfo"
          aria-label="Privacy enquiry contact"
        >
          <p className="text-sm text-muted-foreground">
            Privacy enquiries and data subject requests:{" "}
            <a
              href="mailto:privacy@vipukbettingsites.com"
              className="text-primary hover:underline underline-offset-2 font-medium"
              aria-label="Email our data protection team"
            >
              privacy@vipukbettingsites.com
            </a>
          </p>
        </div>

      </main>
    </div>
  )
}
