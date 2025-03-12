import React, { useState } from "react";
import Sidebar from "./Sidebar";
import PhStudio from "./Concepts/PhStudio";
import Overview from "./Concepts/Overview";
import GeneralTechnical from "./Concepts/GeneralTechnical";
import GeneralDrafting from "./Concepts/GeneralDrafting";
import GeneralBIM from "./Concepts/GeneralBIM";
import FolderStructure from "./Concepts/FolderStructure";
import FileNaming from "./Concepts/FileNaming";
import ProjectType1 from "./Concepts/ProjectType1";
import BaseFile from "./Concepts/BaseFile";
import ArchitectureSheets from "./Concepts/ArchitectureSheets";
import RCP from "./Concepts/RCP";
import EquipmentPlan from "./Concepts/EquipmentPlan";
import ElevationsSeriesA201 from "./Concepts/ElevationsSeriesA201";
import SectionsSeriesA301 from "./Concepts/SectionsSeriesA301";
import InteriorElevationsSeriesA401 from "./Concepts/InteriorElevationsSeriesA401";
import EnlargeRestrooms from "./Concepts/EnlargeRestrooms";
import FuelDrawing from "./Concepts/FuelDrawing";
import PipingDrawing from "./Concepts/PipingDrawing";
import FloorPlansSheetSeriesA101 from "./Concepts/FloorPlansSheetSeriesA101";
import SitePlanSeriesA001 from "./Concepts/SitePlanSeriesA001";
import SitePlans from "./Concepts/SitePlans";
import SiteDetails from "./Concepts/SiteDetails";
import FireLanePlan from "./Concepts/FireLanePlan";
import XFloorPlan from "./Concepts/XFloorPlan";
import X_SitePlan from "./Concepts/X_SitePlan";
import X_Survey from "./Concepts/X_Survey";
import CodeSheetSeriesG001 from "./Concepts/CodeSheetSeriesG001 ";
import G001GenSheetIndex from "./Concepts/G001GenSheetIndex";
import G002GenNotesSheet from "./Concepts/G002GenNotesSheet";
import ComCheck from "./Concepts/ComCheck";

const EmployeeLayout = () => {
  const [activeContent, setActiveContent] = useState(null);

  const renderContent = () => {
    switch (activeContent) {
      case "phstudio":
        return <PhStudio />;
      case "overview":
        return <Overview />;
      case "general-technical":
        return <GeneralTechnical />;
      case "general-drafting":
        return <GeneralDrafting />;
      case "general-bim":
        return <GeneralBIM />;
      case "folder-structure":
        return <FolderStructure />;
      case "file-naming":
        return <FileNaming />;
      case "project-type-1":
        return <ProjectType1 />;
      case "base-file":
        return <BaseFile />;
      case "architecture-sheets":
        return <ArchitectureSheets />;
      case "floor-plans-sheet-series-a101":
        return <FloorPlansSheetSeriesA101 />;
      case "rcp":
        return <RCP />;
      case "equipment-plan":
        return <EquipmentPlan />;
      case "elevations-series-a201":
        return <ElevationsSeriesA201 />;
      case "sections-series-a301":
        return <SectionsSeriesA301 />;
      case "interior-elevations-series-a401":
        return <InteriorElevationsSeriesA401 />;

      case "enlarge-restrooms":
        return <EnlargeRestrooms />;
      case "site-plans-series-a101":
        return <SitePlanSeriesA001 />;
      case "site-plans":
        return <SitePlans />;
      case "site-details":
        return <SiteDetails />;
      case "fire-lane-plan":
        return <FireLanePlan />;
      case "fuel-drawing":
        return <FuelDrawing />;
      case "piping-drawing":
        return <PipingDrawing />;
      case "x-floor-plans":
        return <XFloorPlan />;
      case "x-site-plan":
        return <X_SitePlan />;
      case "x-survey":
        return <X_Survey />;
      case "code-sheet-series-g001":
        return <CodeSheetSeriesG001 />;
      case "g001-gen-sheet-index":
        return <G001GenSheetIndex />;
      case "g002-gen-notes-sheet":
        return <G002GenNotesSheet />;
      case "com-check":
        return <ComCheck />;

      default:
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              fontSize: "18px",
              color: "#64748b",
            }}
          >
            <h3>Select a section from the sidebar</h3>
          </div>
        );
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar setActiveContent={setActiveContent} />
      <div style={{ padding: "20px", flex: 1, background: "#f8fafc" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default EmployeeLayout;
