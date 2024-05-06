import { StaticCard } from "../StaticCard";

export default function () {
  const styles = { backgroundColor: "#f5f5f5" };

  return (
    <div className="flexbox-images-card" style={styles}>
      <StaticCard
        flexcardTitle="Strive for Excellence"
        flexcardText="If you wish to have your logical and technical capacity challenged to the limit, then AlphaTech is the right place for you"
        styles={styles}
        flexcardImg="/Images/icons/career-1.png"
      />
      <StaticCard
        flexcardTitle="Believe in Data"
        flexcardText="Empower decisions with evidence; let data illuminate the path to wisdom."
        styles={styles}
        flexcardImg="/Images/icons/career-2.png"
      />
      <StaticCard
        flexcardTitle="Contribute to growth story"
        flexcardText="Empower our collective journey towards innovation and excellence, contributing to a thriving growth narrative."
        styles={styles}
        flexcardImg="/Images/icons/career-3.png"
      />
    </div>
  );
}
