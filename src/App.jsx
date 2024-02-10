import React from "react";
import CompA from "./components/CompA";

const App = () => {
  const arrObj = [
    {
      Membership: "FREE",
      Price: "$0",
      User: "Single User",
      Storage: "50GB Storage",
      Domain: "Free Subdomain",
      Private: "text-muted bg-light",
      PrivateIcon: "bi bi-x",
      Support: "text-muted bg-light",
      SupportIcon: "bi bi-x",
      Subdomain: "text-muted bg-light",
      SubdomainIcon: "bi bi-x",
      Report: "text-muted bg-light",
      ReportIcon: "bi bi-x",
    },
    {
      Membership: "PLUS",
      Price: "$9",
      User: "5 Users",
      Storage: "50GB Storage",
      Domain: "Free Subdomain",
      Private: "",
      PrivateIcon: "bi bi-check-lg",
      Support: "",
      SupportIcon: "bi bi-check-lg",
      Subdomain: "",
      SubdomainIcon: "bi bi-check-lg",
      Report: "text-muted bg-light",
      ReportIcon: "bi bi-x",
    },
    {
      Membership: "PRO",
      Price: "$49",
      User: "Unlimited Users",
      Storage: "50GB Storage",
      Domain: "Free Subdomain",
      Private: "",
      PrivateIcon: "bi bi-check-lg",
      Support: "",
      SupportIcon: "bi bi-check-lg",
      Subdomain: "",
      SubdomainIcon: "bi bi-check-lg",
      Report: "",
      ReportIcon: "bi bi-check-lg",
    },
  ];
  return (
    <div>
      <CompA arrObj={arrObj} />
    </div>
  );
};

export default App;
