import ButtonLogin from "@/components/ButtonLogin";
import ListItem from "@/components/ListItem";
import FAQListItem from "@/components/FAQListItem";

export default function Home() {
  const User = { name: "Sean", age: 26, address: "Annaclone" };
  const isLoggedIn = true;

  const pricingFeaturesList = [
    "Collect customer feedback",
    "Unlimited boards",
    "Admin dashboard",
    "24/7 support dddd",
  ];
  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
          <div className="font-bold">CodeFastSAAS</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricingSection">
              Pricing
            </a>
            <a className="link link-hover" href="#FAQSection">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} User={User} />
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">
          Collect Customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritise features, and build
          products your customers will love.
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} User={User} />
      </section>

      {/* PRICING */}
      <section className="bg-base-200" id="pricingSection">
        <div className="py-32 px8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl font-extrabold mb-12 lg:text-4xl text-center">
            A pricing that adapts to your needs
          </h2>

          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">£15</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>

            <ul className="space-y-2">
              {pricingFeaturesList.map((priceItem) => {
                return <ListItem key={priceItem}>{priceItem}</ListItem>;
              })}
            </ul>

            <ButtonLogin
              isLoggedIn={isLoggedIn}
              User={User}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="FAQSection">
        <div className="py-32 px8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold mb-12 lg:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "What do I get exactly?",
                answer: "Loreum Ipseum",
              },
              {
                question: "Can I get a refund?",
                answer: "Loreum Ipseum",
              },
              {
                question: "I have another question",
                answer: "Loreum Ipseum",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
