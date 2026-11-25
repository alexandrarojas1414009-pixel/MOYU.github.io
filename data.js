/* =====================================================================
   EDIT HERE: this is the only file you need to change for the 12 weeks.
   - date:       day you did the work (e.g. "September 8, 2026")
   - objectives: list given by your teacher (type them, do not use a photo)
   - learned:    what YOU learned, in your own words
   - evidence:   photos of handwritten notes / workshops / tests.
                 Put the image files in the "images" folder.
                 Each photo must show: full name, unit title and date.
   - noClass:    if there was no class that week, write a short note
                 (otherwise leave it as "").
   ===================================================================== */
const STUDENT = {
  name: "Cary De Gracia",
  group: "N-EB-4-1",
  id: "8-993-859",
  instructor: "[Teacher's name]"
};

const weeks = Array.from({length: 12}, (_, i) => ({
  date: "[Date]",
  objectives: ["[Type objective 1 given by your teacher]", "[Objective 2]"],
  learned: ["[What I learned 1]", "[What I learned 2]"],
  evidence: [
    { src: `images/week${i + 1}-1.jpg`, caption: "[Unit title] – [Date]" },
    { src: `images/week${i + 1}-2.jpg`, caption: "[Unit title] – [Date]" }
  ],
  noClass: ""
}));
