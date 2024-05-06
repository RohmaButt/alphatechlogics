import { StaticCard } from "../StaticCard";

export default function () {
  const styles = { backgroundColor: "#f5f5f5" };

  return (
    <div className="flexbox-images-card">
      <StaticCard
        flexcardTitle="General Queries"
        flexURLMessage="For general queries, please reach out to us at"
        flexcardText="info@alphatechlogics.com"
        flexcardImg="/Images/icons/contact-1.png"
        styles={styles}
        flexIsImageURL={true}
      />
      <StaticCard
        flexcardTitle="Careers"
        flexURLMessage="For career opportunities, please contact us at "
        flexcardText="careers@alphatechlogics.com"
        flexcardImg="/Images/icons/contact-2.png"
        styles={styles}
        flexIsImageURL={true}
      />
      <StaticCard
        flexcardTitle="Sales"
        flexURLMessage="For inquiries and assistance, contact our sales team at "
        flexcardText="sales@alphatechlogics.com"
        flexcardImg="/Images/icons/contact-3.png"
        styles={styles}
        flexIsImageURL={true}
      />
    </div>
  );
}
