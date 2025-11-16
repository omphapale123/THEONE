
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how OffshoreBrücke collects, uses, and protects your personal information.
          </p>
          <div className="mt-6 text-sm text-slate-400">
            Last Updated: January 2025
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Introduction</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="mb-4">
                OffshoreBrücke ("we," "our," or "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, process, and protect your information when you use our services, including GCC setup services, compliance support, RegTech automation, and trade facilitation platform.
              </p>
              <p className="mb-4">
                This policy complies with the European Union's General Data Protection Regulation (GDPR), India's Digital Personal Data Protection Act (DPDP Act), and other applicable international data protection laws.
              </p>
              <p>
                By using our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described herein.
              </p>
            </div>
          </div>

          {/* Definitions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Definitions</h2>
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Personal Data</h4>
                  <p className="text-sm text-slate-600">Any information relating to an identified or identifiable natural person.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Processing</h4>
                  <p className="text-sm text-slate-600">Any operation performed on personal data, including collection, storage, use, or disclosure.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Data Controller</h4>
                  <p className="text-sm text-slate-600">OffshoreBrücke, which determines the purposes and means of processing personal data.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Data Subject</h4>
                  <p className="text-sm text-slate-600">You, the individual whose personal data is being processed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Data We Collect</h2>
            
            <div className="space-y-8">
              {/* Personal Identification Data */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <i className="ri-user-line mr-2 text-blue-600"></i>
                  Personal Identification Data
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700">
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Name</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Email address</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Phone number</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Company name</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Job title</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Country of residence</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Government IDs (when required for compliance)</li>
                </ul>
              </div>

              {/* Business & GCC Data */}
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <i className="ri-building-line mr-2 text-emerald-600"></i>
                  Business & GCC Data
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700">
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Company documents</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Incorporation documents</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Banking information (not payment cards)</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Trade documents</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Compliance/KYC documents</li>
                </ul>
              </div>

              {/* Technical Data */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <i className="ri-computer-line mr-2 text-purple-600"></i>
                  Technical Data
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700">
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>IP address</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Browser type and version</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Device information</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Usage analytics</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Cookies and tracking data</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>API logs and interactions</li>
                </ul>
              </div>

              {/* Uploaded Files */}
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <i className="ri-file-line mr-2 text-orange-600"></i>
                  Uploaded Files & Documents
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700">
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>PDF documents</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Images and scanned documents</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Business agreements</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Trade-related files</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Compliance documentation</li>
                </ul>
              </div>

              {/* Third-Party API Data */}
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <i className="ri-api-line mr-2 text-red-600"></i>
                  Data from Third-Party APIs
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700">
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>OCR processing results</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Verification reports</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Risk scoring data</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>Compliance check results</li>
                  <li className="flex items-center"><i className="ri-check-line mr-2 text-green-600"></i>AI-generated insights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Data */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">4. How We Use Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Primary Business Purposes</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start"><i className="ri-arrow-right-s-line mr-2 mt-1 text-blue-600"></i>GCC setup and establishment services</li>
                  <li className="flex items-start"><i className="ri-arrow-right-s-line mr-2 mt-1 text-blue-600"></i>KYC/AML compliance processing</li>
                  <li className="flex items-start"><i className="ri-arrow-right-s-line mr-2 mt-1 text-blue-600"></i>RegTech automation and verification</li>
                  <li className="flex items-start"><i className="ri-arrow-right-s-line mr-2 mt-1 text-blue-600"></i>Document verification and processing</li>
                  <li className="flex items-start"><i className="ri-arrow-right-s-line mr-2 mt-1 text-blue-600"></i>Trade verification and facilitation</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Operational Purposes</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start"><i className="ri-arrow-right-s-line mr-2 mt-1 text-purple-600"></i>Customer onboarding and communication</li>
                  <li className="flex items-start"><i className="ri-arrow-right-s-line mr-2 mt-1 text-purple-600"></i>Legal and regulatory compliance</li>
                  <li className="flex items-start"><i className="ri-arrow-right-s-line mr-2 mt-1 text-purple-600"></i>Platform improvement and AI model training</li>
                  <li className="flex items-start"><i className="ri-arrow-right-s-line mr-2 mt-1 text-purple-600"></i>Customer support and service delivery</li>
                  <li className="flex items-start"><i className="ri-arrow-right-s-line mr-2 mt-1 text-purple-600"></i>Analytics and business intelligence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Legal Basis for Processing (GDPR)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <i className="ri-check-double-line mr-2 text-green-600"></i>Consent
                </h3>
                <p className="text-slate-600">When you explicitly agree to our processing of your data for specific purposes.</p>
              </div>
              <div className="border border-slate-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <i className="ri-file-text-line mr-2 text-blue-600"></i>Contractual Necessity
                </h3>
                <p className="text-slate-600">Processing necessary to perform our GCC setup and compliance services.</p>
              </div>
              <div className="border border-slate-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <i className="ri-shield-check-line mr-2 text-purple-600"></i>Legal Obligation
                </h3>
                <p className="text-slate-600">Compliance with KYC/AML laws and regulatory requirements.</p>
              </div>
              <div className="border border-slate-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <i className="ri-scales-line mr-2 text-orange-600"></i>Legitimate Interest
                </h3>
                <p className="text-slate-600">Business operations, fraud prevention, and service improvement.</p>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">6. Third-Party Services</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <p className="text-slate-700 mb-4">
                We may use various third-party services to provide and improve our platform. These services handle data according to their own privacy policies:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center text-slate-600">
                  <i className="ri-database-line mr-2 text-blue-600"></i>Supabase
                </div>
                <div className="flex items-center text-slate-600">
                  <i className="ri-shield-check-line mr-2 text-green-600"></i>Verification APIs
                </div>
                <div className="flex items-center text-slate-600">
                  <i className="ri-scan-line mr-2 text-purple-600"></i>OCR APIs
                </div>
                <div className="flex items-center text-slate-600">
                  <i className="ri-robot-line mr-2 text-orange-600"></i>AI Models
                </div>
                <div className="flex items-center text-slate-600">
                  <i className="ri-bank-card-line mr-2 text-red-600"></i>Payment Processors
                </div>
                <div className="flex items-center text-slate-600">
                  <i className="ri-cloud-line mr-2 text-emerald-600"></i>Cloud Hosting
                </div>
                <div className="flex items-center text-slate-600">
                  <i className="ri-customer-service-line mr-2 text-blue-600"></i>CRM Systems
                </div>
                <div className="flex items-center text-slate-600">
                  <i className="ri-mail-line mr-2 text-yellow-600"></i>Email Services
                </div>
              </div>
            </div>
          </div>

          {/* Cookies & Tracking */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">7. Cookies & Tracking</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Essential Cookies</h4>
                  <p className="text-sm text-green-700">Required for basic website functionality and security.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-blue-700">Help us understand how you use our website to improve it.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Preference Cookies</h4>
                  <p className="text-sm text-purple-700">Remember your settings and preferences for a better experience.</p>
                </div>
              </div>
              <p className="text-slate-600">
                You can control cookie settings in your browser, but disabling essential cookies may affect website functionality.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">8. Data Retention</h2>
            <div className="bg-slate-50 p-6 rounded-lg">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <i className="ri-time-line mr-3 mt-1 text-blue-600"></i>
                  <span><strong>General Data:</strong> Retained for the duration of our business relationship plus 7 years for legal purposes</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-shield-line mr-3 mt-1 text-green-600"></i>
                  <span><strong>KYC/Compliance Data:</strong> Retained for 10 years as required by regulatory obligations</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-file-line mr-3 mt-1 text-purple-600"></i>
                  <span><strong>Trade Documents:</strong> Retained for 7-10 years based on applicable trade regulations</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-computer-line mr-3 mt-1 text-orange-600"></i>
                  <span><strong>Technical Data:</strong> Typically retained for 2-3 years for security and analytics purposes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Data Protection & Security */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">9. Data Protection & Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-lock-line mr-3 mt-1 text-green-600"></i>
                  <div>
                    <h4 className="font-semibold text-slate-900">Encryption</h4>
                    <p className="text-sm text-slate-600">Data encrypted in transit and at rest using industry-standard protocols</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-user-settings-line mr-3 mt-1 text-blue-600"></i>
                  <div>
                    <h4 className="font-semibold text-slate-900">Access Control</h4>
                    <p className="text-sm text-slate-600">Strict access controls and authentication for all systems</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-search-line mr-3 mt-1 text-purple-600"></i>
                  <div>
                    <h4 className="font-semibold text-slate-900">Regular Audits</h4>
                    <p className="text-sm text-slate-600">Continuous monitoring and security assessments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-alarm-warning-line mr-3 mt-1 text-red-600"></i>
                  <div>
                    <h4 className="font-semibold text-slate-900">Incident Response</h4>
                    <p className="text-sm text-slate-600">Rapid response procedures for any security incidents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">10. Your Rights (GDPR & DPDP Act)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                    <i className="ri-eye-line mr-2"></i>Right to Access
                  </h4>
                  <p className="text-sm text-blue-700">Request copies of your personal data we hold</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <i className="ri-edit-line mr-2"></i>Right to Rectification
                  </h4>
                  <p className="text-sm text-green-700">Correct inaccurate or incomplete data</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <i className="ri-delete-bin-line mr-2"></i>Right to Deletion
                  </h4>
                  <p className="text-sm text-red-700">Request deletion of your data (subject to legal obligations)</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                    <i className="ri-download-line mr-2"></i>Right to Portability
                  </h4>
                  <p className="text-sm text-purple-700">Receive your data in a structured, machine-readable format</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                    <i className="ri-hand-line mr-2"></i>Right to Withdraw Consent
                  </h4>
                  <p className="text-sm text-orange-700">Withdraw consent at any time where processing is based on consent</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                    <i className="ri-pause-line mr-2"></i>Right to Restrict Processing
                  </h4>
                  <p className="text-sm text-yellow-700">Request limitation of processing in certain circumstances</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2 flex items-center">
                    <i className="ri-information-line mr-2"></i>Right to Know
                  </h4>
                  <p className="text-sm text-emerald-700">Understand what data is collected and how it's used</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2 flex items-center">
                    <i className="ri-complaint-line mr-2"></i>Right to Complain
                  </h4>
                  <p className="text-sm text-pink-700">Lodge complaints with supervisory authorities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Transfers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">11. International Data Transfers</h2>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <p className="text-slate-700 mb-4">
                Your data may be transferred to and processed in countries outside your country of residence, including India, the United States, and other countries where our service providers operate.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="ri-shield-check-line mr-3 mt-1 text-blue-600"></i>
                  <span className="text-slate-700"><strong>Safeguards:</strong> We implement appropriate safeguards such as Standard Contractual Clauses (EU SCC) and adequacy decisions</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-global-line mr-3 mt-1 text-blue-600"></i>
                  <span className="text-slate-700"><strong>Legal Mechanisms:</strong> All transfers comply with applicable data protection laws and regulations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Minors */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">12. Minors</h2>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <p className="text-slate-700">
                Our services are intended for business use and are not directed at individuals under 18 years of age. We do not knowingly collect personal information from minors. If you become aware that a minor has provided us with personal data, please contact us immediately.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">13. Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Company Details</h3>
                <div className="space-y-2 text-slate-600">
                  <p><strong>Legal Name:</strong> [Company Legal Name - To be updated]</p>
                  <p><strong>Registered Address:</strong> [Registered Address - To be updated]</p>
                  <p><strong>Business Email:</strong> [Business Email - To be updated]</p>
                  <p><strong>Website:</strong> offshorebruecke.com</p>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Data Protection</h3>
                <div className="space-y-2 text-slate-600">
                  <p><strong>Data Protection Officer:</strong> [DPO Contact - Optional]</p>
                  <p><strong>Privacy Inquiries:</strong> privacy@offshorebruecke.com</p>
                  <p><strong>General Contact:</strong> info@offshorebruecke.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">14. Updates to This Privacy Policy</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <p className="text-slate-700 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <i className="ri-notification-line mr-3 mt-1 text-yellow-600"></i>
                  <span className="text-slate-700"><strong>Notification:</strong> We will notify you of significant changes via email or prominent website notice</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-calendar-line mr-3 mt-1 text-yellow-600"></i>
                  <span className="text-slate-700"><strong>Effective Date:</strong> Changes become effective 30 days after notification unless immediate compliance is required</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-history-line mr-3 mt-1 text-yellow-600"></i>
                  <span className="text-slate-700"><strong>Review:</strong> Please review this policy periodically for any updates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm">
              This Privacy Policy was last updated on January 2025 and is governed by the laws of India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
