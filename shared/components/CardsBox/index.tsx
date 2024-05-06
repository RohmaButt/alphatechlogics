import { Card } from "../Card";

export default function () {
  return (
    <>
      <div className="flexbox">
       <Card
          flexcardTitle="Software Development"
          flexcardText=" Development of customized web and mobile solutions to automate business workflows, onboard new users, and manage millions of transactions"
          flexcardImgHref="/software-development"
        />
        <Card
          flexcardTitle="Consulting & Advisory"
          flexcardText="Allowing for data-dependent business processes and applications to
          deliver more accurate insights."
          flexcardImgHref="/consulting-and-advisory"
        />
        <Card
          flexcardTitle="Artificial Intelligence"
          flexcardText="Using Artificial Intelligence to power new product features, generate actionable intelligence with automated processes"
          flexcardImgHref="/artificial-intelligence"
        />
      </div>
      <div className="flexbox">
         <Card
          flexcardTitle="Data Analytics"
          flexcardText="Develop smarter, context-sensitive analytics, which incorporates
          external, unstructured and environmental data."
          flexcardImgHref="/data-analytics"
        />
        <Card
          flexcardTitle="Cloud DevOps"
          flexcardText="Designing state-of-the-art infrastructure to enable best SDLC practices, increase agility, and streamline workflows"
          flexcardImgHref="/devops"
        />
        <Card
          flexcardTitle="Robotics Process Automation"
          flexcardText="Building robotic processes to automate routine activities such as customer onboarding, KYC, order processing and more."
          flexcardImgHref="/robotics-automation"
        />
      </div>
    </>
  );
}
