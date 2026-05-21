import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"
import { Header } from "@/components/header"

function CookiePolicySection({
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
        className="px-5 py-4 text-sm text-muted-foreground leading-relaxed"
        aria-labelledby={sectionId}
      >
        {children}
      </div>
    </div>
  )
}

const cookieCategories = [
  {
    title:    "Essential Cookies",
    tag:      "Required",
    tagStyle: "bg-primary/12 text-primary border border-primary/25",
    desc:     "Strictly necessary for the core functionality of vipukbettingsites.com — including remembering your cookie consent preference. These cannot be disabled while using the site.",
  },
  {
    title:    "Analytics Cookies",
    tag:      "Optional",
    tagStyle: "bg-surface text-muted-foreground border border-border",
    desc:     "Help us understand how visitors navigate the site so we can improve content structure, page performance, and the overall user experience. All data is aggregated and anonymised.",
  },
  {
    title:    "Marketing & Attribution Cookies",
    tag:      "Optional",
    tagStyle: "bg-surface text-muted-foreground border border-border",
    desc:     "Used to measure the effectiveness of our affiliate partnerships and to serve contextually relevant content to visitors. No personally identifiable data is shared with third parties for advertising purposes.",
  },
]

export default function CookiePolicyPage() {
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
              <Cookie className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
              Cookie Policy
            </h1>
          </div>
          <p className="text-white/45 text-xs mt-1 ml-11">
            vipukbettingsites.com · Last updated: January {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <main
        className="container mx-auto max-w-3xl px-4 py-8 space-y-4"
        aria-label="Cookie Policy content"
      >

        <CookiePolicySection title="What Are Cookies?" sectionId="vip-cookie-what">
          <p>
            Cookies are small text files placed on your device when you visit a website. They allow the site to recognise your browser and store information about your visit — such as your preferences and consent choices — to improve your experience on subsequent visits.
          </p>
          <p className="mt-2">
            Cookies on vipukbettingsites.com do not collect personally identifiable information unless you have explicitly provided it. All cookie consent choices you make are stored locally on your device.
          </p>
        </CookiePolicySection>

        {/* Cookie categories */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2
              id="vip-cookie-types"
              className="font-heading font-bold text-base text-foreground"
            >
              Cookie Categories Used on This Site
            </h2>
          </div>
          <div
            className="divide-y divide-border"
            aria-labelledby="vip-cookie-types"
            role="list"
          >
            {cookieCategories.map((item) => (
              <div key={item.title} className="px-5 py-4" role="listitem">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                  <span
                    className={`${item.tagStyle} text-[10px] px-2.5 py-0.5 rounded-full font-heading font-bold uppercase tracking-wide`}
                    aria-label={`Cookie type: ${item.tag}`}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <CookiePolicySection title="How to Manage Your Cookie Preferences" sectionId="vip-cookie-manage">
          <p>
            You can update your cookie preferences at any time using the banner displayed on your first visit to vipukbettingsites.com. Selecting &ldquo;Essential Only&rdquo; will disable all non-essential cookies while retaining full site functionality.
          </p>
          <p className="mt-2">
            You may also control cookie storage directly through your browser settings. The following browsers provide clear instructions on managing cookies:
          </p>
          <ul className="mt-2 space-y-1.5">
            {["Google Chrome", "Mozilla Firefox", "Apple Safari", "Microsoft Edge"].map((browser) => (
              <li key={browser} className="flex items-start gap-2 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
                {browser}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs">
            Please note that disabling essential cookies may affect the functionality of certain site features, including consent storage.
          </p>
        </CookiePolicySection>

        <CookiePolicySection title="Third-Party Cookies" sectionId="vip-cookie-third-party">
          <p>
            Certain third-party services integrated with vipukbettingsites.com — including analytics platforms and affiliate networks — may set their own cookies subject to their respective privacy policies. We recommend reviewing the cookie policies of any third-party services you interact with through our site.
          </p>
        </CookiePolicySection>

        <CookiePolicySection title="Policy Updates" sectionId="vip-cookie-updates">
          <p>
            This Cookie Policy may be updated periodically to reflect changes in our practices or applicable regulations. The &ldquo;Last updated&rdquo; date at the top of this page will indicate when the most recent revision was published. Continued use of vipukbettingsites.com following any changes constitutes acceptance of the revised policy.
          </p>
        </CookiePolicySection>

        {/* Contact card */}
        <div
          className="bg-surface border border-border rounded-xl px-5 py-4"
          role="contentinfo"
          aria-label="Cookie enquiry contact"
        >
          <p className="text-sm text-muted-foreground">
            Cookie or privacy enquiries:{" "}
            <a
              href="mailto:cookies@vipukbettingsites.com"
              className="text-primary hover:underline underline-offset-2 font-medium"
              aria-label="Email our cookie policy team"
            >
              cookies@vipukbettingsites.com
            </a>
          </p>
        </div>

      </main>
    </div>
  )
}
