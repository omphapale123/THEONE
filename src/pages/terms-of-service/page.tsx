export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Business Overview */}
            <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Business Overview</h2>
              <p className="text-slate-700 leading-relaxed">
                OffshoreBrücke provides end-to-end GCC (Global Capability Center) setup services for international companies 
                looking to establish operations in India. We specialize in comprehensive business setup, compliance management, 
                and trade facilitation services.
              </p>
            </div>

            {/* 1. Definitions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Definitions</h2>
              <div className="space-y-3 text-slate-700">
                <p><strong>"Company"</strong> refers to OffshoreBrücke, a business entity registered in India.</p>
                <p><strong>"Services"</strong> refers to all GCC setup, compliance, trade facilitation, and automation services provided by the Company.</p>
                <p><strong>"Client"</strong> or "User" refers to any individual or entity using our services.</p>
                <p><strong>"GCC"</strong> refers to Global Capability Center.</p>
                <p><strong>"Platform"</strong> refers to our website, applications, and digital services.</p>
                <p><strong>"Third-Party Services"</strong> refers to external APIs, tools, and services integrated into our platform.</p>
              </div>
            </section>

            {/* 2. Scope of Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Scope of Services</h2>
              <p className="text-slate-700 mb-4">
                OffshoreBrücke provides the following categories of services:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">2.1 GCC Setup Services</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Company registration and entity incorporation</li>
                    <li>• Legal and compliance setup</li>
                    <li>• FDI compliance assistance</li>
                    <li>• Banking and financial setup</li>
                    <li>• Infrastructure and technology setup</li>
                    <li>• Hiring, HR, and payroll setup</li>
                    <li>• Vendor onboarding</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">2.2 Operational Support Services</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Monthly compliance management</li>
                    <li>• HR and payroll management</li>
                    <li>• Vendor management</li>
                    <li>• Ongoing operational support</li>
                    <li>• Regulatory updates and notifications</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">2.3 Trade Facilitation Services</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Connecting international buyers with verified Indian suppliers</li>
                    <li>• Due-diligence and compliance checks</li>
                    <li>• AI-based verification services</li>
                    <li>• Platform facilitation (non-broker model)</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">2.4 RegTech & Automation Tools</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Automated KYC/AML processes</li>
                    <li>• Document verification systems</li>
                    <li>• Cross-border compliance automation</li>
                    <li>• Import/export documentation processing</li>
                    <li>• API integrations and workflow tools</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. User Obligations */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Obligations</h2>
              <div className="space-y-3 text-slate-700">
                <p>3.1 Users must provide accurate, complete, and up-to-date information for all services.</p>
                <p>3.2 Users must ensure all uploaded documents and data are legal, authentic, and comply with applicable laws.</p>
                <p>3.3 Users are responsible for maintaining confidentiality of their account credentials.</p>
                <p>3.4 Users must comply with all applicable laws and regulations in their jurisdiction and India.</p>
                <p>3.5 Users must promptly notify us of any changes in their business structure or compliance requirements.</p>
              </div>
            </section>

            {/* 4. Restrictions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Restrictions</h2>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-4">
                <p className="text-red-800 font-semibold mb-2">Important: OffshoreBrücke is NOT a trading company.</p>
                <p className="text-red-700">We do not buy, sell, or trade products. We facilitate business setup and compliance services only.</p>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>4.1 Users may not use our services for illegal activities or fraudulent purposes.</p>
                <p>4.2 Users may not attempt to reverse engineer, hack, or compromise our systems.</p>
                <p>4.3 Users may not share account access with unauthorized parties.</p>
                <p>4.4 Users may not use our platform to circumvent applicable laws or regulations.</p>
              </div>
            </section>

            {/* 5. Payments & Fees */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Payments & Fees</h2>
              <div className="space-y-3 text-slate-700">
                <p>5.1 <strong>Payment Model:</strong> Services are charged on a project-based or platform fee basis.</p>
                <p>5.2 <strong>Platform Fees:</strong> For trade facilitation services, we charge platform/service fees on successful deals.</p>
                <p>5.3 All fees are exclusive of applicable taxes unless otherwise stated.</p>
                <p>5.4 Payment terms will be specified in individual service agreements.</p>
                <p>5.5 Late payment may result in service suspension and additional charges.</p>
              </div>
            </section>

            {/* 6. Refund Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Refund Policy</h2>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <p className="text-yellow-800 font-semibold mb-2">No Refund Policy</p>
                <p className="text-yellow-700">
                  No refunds are provided after onboarding and service commencement, except where legally required 
                  under applicable consumer protection laws.
                </p>
              </div>
            </section>

            {/* 7. Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Services</h2>
              <div className="space-y-3 text-slate-700">
                <p>7.1 Our platform integrates with third-party APIs and services including Supabase, OCR APIs, and verification services.</p>
                <p>7.2 We are not responsible for the performance, availability, or security of third-party services.</p>
                <p>7.3 Third-party services are subject to their own terms and conditions.</p>
                <p>7.4 We may change or discontinue third-party integrations with reasonable notice.</p>
              </div>
            </section>

            {/* 8. Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
                <p className="text-orange-800 font-semibold mb-2">Important Disclaimer</p>
                <p className="text-orange-700">
                  We provide information and facilitation services only. Final decisions and liabilities remain with clients. 
                  We do not guarantee outcomes of government approvals, registrations, or third-party delays.
                </p>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>8.1 Our liability is limited to the fees paid for the specific service in question.</p>
                <p>8.2 We are not liable for indirect, consequential, or punitive damages.</p>
                <p>8.3 We are not responsible for delays caused by government agencies or third parties.</p>
                <p>8.4 Force majeure events excuse performance delays or failures.</p>
              </div>
            </section>

            {/* 9. Data Protection & Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Data Protection & Privacy</h2>
              <div className="space-y-3 text-slate-700">
                <p>9.1 We comply with GDPR and Indian Data Protection and Privacy Act (DPDP) requirements.</p>
                <p>9.2 We may store user data for operational and compliance purposes.</p>
                <p>9.3 Data processing is conducted in accordance with our Privacy Policy.</p>
                <p>9.4 Users have rights to access, correct, and delete their personal data subject to legal requirements.</p>
                <p>9.5 We implement appropriate technical and organizational measures to protect user data.</p>
              </div>
            </section>

            {/* 10. Confidentiality */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Confidentiality</h2>
              <div className="space-y-3 text-slate-700">
                <p>10.1 We maintain strict confidentiality of all client information and business data.</p>
                <p>10.2 Confidential information will not be disclosed to third parties without consent, except as required by law.</p>
                <p>10.3 Our employees and contractors are bound by confidentiality agreements.</p>
                <p>10.4 Confidentiality obligations survive termination of services.</p>
              </div>
            </section>

            {/* 11. Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Intellectual Property</h2>
              <div className="space-y-3 text-slate-700">
                <p>11.1 All platform technology, software, and proprietary tools remain our intellectual property.</p>
                <p>11.2 Users retain ownership of their business data and documents.</p>
                <p>11.3 Users grant us necessary licenses to provide services effectively.</p>
                <p>11.4 Any improvements or derivatives of our technology remain our property.</p>
              </div>
            </section>

            {/* 12. Term & Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Term & Termination</h2>
              <div className="space-y-3 text-slate-700">
                <p>12.1 Services commence upon agreement execution and continue as specified in individual contracts.</p>
                <p>12.2 Either party may terminate with 30 days written notice, subject to ongoing obligations.</p>
                <p>12.3 We may terminate immediately for breach of terms or illegal activities.</p>
                <p>12.4 Termination does not affect accrued rights and obligations.</p>
                <p>12.5 Data retention post-termination follows our Privacy Policy and legal requirements.</p>
              </div>
            </section>

            {/* 13. Disclaimer */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Disclaimer</h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                <div className="space-y-3 text-gray-700">
                  <p>13.1 Services are provided "as is" without warranties of any kind.</p>
                  <p>13.2 We disclaim all warranties, express or implied, including merchantability and fitness for purpose.</p>
                  <p>13.3 We do not guarantee specific outcomes, approvals, or timelines.</p>
                  <p>13.4 Information provided is for guidance only and does not constitute legal or financial advice.</p>
                </div>
              </div>
            </section>

            {/* 14. Governing Law & Jurisdiction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Governing Law & Jurisdiction</h2>
              <div className="space-y-3 text-slate-700">
                <p>14.1 <strong>Applicable Law:</strong> These terms are governed by the laws of India.</p>
                <p>14.2 <strong>Jurisdiction:</strong> All disputes are subject to the exclusive jurisdiction of Indian courts.</p>
                <p>14.3 Any legal proceedings must be conducted in English.</p>
                <p>14.4 Parties agree to attempt mediation before litigation.</p>
              </div>
            </section>

            {/* 15. Amendments */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Amendments</h2>
              <div className="space-y-3 text-slate-700">
                <p>15.1 We reserve the right to modify these terms with 30 days notice.</p>
                <p>15.2 Continued use of services after amendments constitutes acceptance.</p>
                <p>15.3 Material changes will be highlighted and require explicit consent.</p>
                <p>15.4 Individual service agreements may have specific amendment procedures.</p>
              </div>
            </section>

            {/* 16. Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Contact Information</h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="space-y-3 text-blue-800">
                  <p><strong>Company Name:</strong> OffshoreBrücke</p>
                  <p><strong>Website:</strong> offshorebruecke.com</p>
                  <p><strong>Business Email:</strong> [To be updated]</p>
                  <p><strong>Registered Address:</strong> [To be updated]</p>
                  <p><strong>Business Type:</strong> [Registration details to be updated]</p>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-blue-700 text-sm">
                    For questions about these terms or our services, please contact us through the above channels. 
                    We aim to respond to all inquiries within 48 hours.
                  </p>
                </div>
              </div>
            </section>

            {/* Effective Date */}
            <div className="mt-12 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600">
                These Terms of Service are effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and supersede all previous versions.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}