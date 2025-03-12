import React from "react";

const X_SitePlan = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Calibri, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>X_Site Plan</h1>

      <h4>Physical Elements:</h4>
      <ul>
        <li>
          <u>Building</u> outer profile in yellow line, inner wall profile in
          blue profile. Match layer - AS-BLDG.
        </li>
        <li>
          <u>Parking lines</u> - Blue - Pline in AS-PARKING STRIPE
        </li>
        <li>
          <u>Parking stopper</u> - 2'3" away from curb line, 2' from both sides
          of parking lines.
        </li>
        <li>
          <u>Curb</u> - 6-inch curb width required. Roadside line should be a
          red line, other side line in 8no. color in CAD.
        </li>
        <li>
          <u>Light poles</u> - Four types: 1 arm, 2 arm, 3 arm, and 4 arm.
          Generally, keep 60 to 80ft distance between two light poles, depending
          on location, number of arms, junctions, turns, and the surrounding
          area. Block in 'E-LIGHT' layer with yellow color.
        </li>
        <li>
          <u>Dumpster</u> - Needs 60ft open distance in front of the dumpster.
          Also, ensure it doesn't affect parking space.
        </li>
        <li>
          <u>Air and water unit</u> - Near the gas station, towards the exterior
          roadside, with some space around it for vehicles to stop and use.
        </li>
        <li>
          <u>Underground fuel tanks</u> - Near the gas station, away from the
          C-store. The filling tank should have enough space to park without
          obstructing traffic.
        </li>
      </ul>

      <h4>Drawing Elements:</h4>
      <ul>
        <li>
          <u>Dimension:</u>
          <ul>
            <li>Give string-based dimensions.</li>
            <li>
              First horizontal string dimension should go from end to end of the
              site and target the maximum elements of the site plan.
            </li>
            <li>
              Second horizontal string dimension should also target the maximum
              elements of the site plan.
            </li>
            <li>
              Separate dimensions for parking width or length if not covered in
              the string.
            </li>
            <li>
              Parking width should show the total number of parking spaces,
              width, and length. Example:{" "}
              <strong>9 SPACES @9'-0" = 72'-0"</strong>.
            </li>
            <li>
              Road edge dimensions should show driveway width and landscape area
              widths.
            </li>
            <li>
              Dimensions from canopy, sidewalk, and clearances around the
              building.
            </li>
            <li>
              Startup dimensions for the building. Provide dimensions from the
              lot line to indicate where they can start the building.
            </li>
            <li>Canopy dimensions along with MPD dimensions.</li>
          </ul>
        </li>

        <li>
          <u>Tags:</u>
          <ul>
            <li>Total 18 types of tags need to be added.</li>
            <li>
              Ensure all items exist in the drawing and are properly tagged.
            </li>
          </ul>
        </li>

        <li>
          <u>Hatches:</u>
          <ul>
            <li>Landscape hatches</li>
            <li>ADA pathways from the sidewalk to the gas station</li>
            <li>Detention pond or retention pond</li>
          </ul>
        </li>

        <li>
          <u>Property Line:</u>
          <ul>
            <li>P-line with proper line properties and AS-SITE layer.</li>
          </ul>
        </li>
      </ul>

      <h4>Survey:</h4>
      <ul>
        <li>Switch off Layer - put all information which is not required.</li>
        <li>
          Change the layer color of other items and ensure it matches the
          reference.
        </li>
      </ul>

      <h4>Checklist:</h4>
      <ul>
        <li>Technical checks</li>
        <li>Drafting checks</li>
      </ul>
    </div>
  );
};

export default X_SitePlan;
