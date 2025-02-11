import Link from "next/link";
const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for insightify
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Welcome to Insightify ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website (https://www.insightify.cam/).

1. Information We Collect
We collect the following information:

Personal Data: Name, email address, and payment information.

Non-Personal Data: Web cookies to enhance user experience.

2. Purpose of Data Collection
We collect data to process orders and improve our services.

3. Data Sharing
We do not share your personal data with any third parties.

4. Children's Privacy
Our services are not intended for children, and we do not knowingly collect data from children.

5. Updates to This Privacy Policy
We may update this policy from time to time. Users will be notified of any changes via email.

6. Contact Us
If you have any questions about this Privacy Policy, please contact us at contact@insightify.cam.

Thank you for using Insightify!`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
