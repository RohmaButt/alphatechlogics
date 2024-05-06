import Breadcrums from "@/shared/components/Breadcrums";
import CareersSection from "@/shared/components/CareersSection";
import MainWrapper from "@/shared/components/MainWrapper";

const Careers = () => {
  return (
    <div className="flex flex-col mt-64">
      <section>
        <Breadcrums
          title="Careers at &alpha;Tech"
          image="/Images/images/careers.webp"
          description0="At AlphaTech, we emphasize on "
          description1="employee well-being, motivation, and growth, "
          description2="while providing our team with the support needed to discover their full potential and excel"
          blue_color0={false}
          blue_color1={true}
          blue_color2={false}
        />
      </section>
      <section className="why-us">
        <h1>Empower Your Future: Join Our Team Today!</h1>
      </section>
      <section className="why-us">
        <h2>Why Join Us?</h2>
      </section>
      <CareersSection />
    </div>
  );
};

export default MainWrapper(Careers);
