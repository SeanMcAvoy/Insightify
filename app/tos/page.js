import Link from "next/link";

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for Insightify
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms & ServicesEffective Date: February 11, 2025

Welcome to Insightify ("we," "our," or "us"). By accessing or using our website (https://www.insightify.cam), you agree to these Terms & Services.

1. Services Provided
Insightify is a SaaS platform that helps businesses collect user feedback. When you purchase a package, you receive access to the platform.

2. User Data Collection
We collect personal data, including name, email, and payment information, as well as non-personal data through web cookies. For more details, please review our Privacy Policy at https://www.insightify.cam/privacy-policy.

3. Ownership & Access
Users who purchase a package gain access to the platform for the duration specified in their plan. Ownership of the platform remains with Insightify.

4. Governing Law
These Terms & Services are governed by the laws of the United Kingdom.

5. Updates to These Terms
We may update these terms from time to time. Users will be notified of any changes via email.

6. Contact Us
If you have any questions, please contact us at contact@insightify.cam.

Thank you for using Insightify!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
