export const DOWNLOAD_URL = "https://github.com/aditya3614/vacuum-website/releases/latest/download/Vacuum.zip";
export const RELEASES_URL = "https://github.com/aditya3614/vacuum-website/releases";
export const VERSION = "1.0";
export const BAG_PATH = "~/Library/Application Support/Vacuum/Bag";
export const UNQUARANTINE = "xattr -dr com.apple.quarantine /Applications/Vacuum.app";

export const steps = [
  {
    image: "images/step-suck.jpg",
    alt: "The floor nozzle pulling a PDF in while the motor runs",
    title: "Push the nozzle",
    text: "Drag the black floor nozzle across your desktop. The motor spins up, and any file, folder or app it passes over gets pulled in.",
  },
  {
    image: "images/step-full.jpg",
    alt: "The red canister swollen with a tag showing 12 files inside",
    title: "Watch it fill",
    text: "The canister swells a little with every file and a tag on its side keeps count. It rolls along behind you on its hose.",
  },
  {
    image: "images/step-toss.jpg",
    alt: "Files flying back out of the nozzle to their old spots",
    title: "Throw it all back",
    text: "Click the round button on the canister. Files shoot out of the nozzle one by one and land on the same spot they were picked up from.",
  },
];

export const details = [
  {
    title: "It sounds like a vacuum",
    text: "The motor hum, rushing air and turbine whine are generated live, and spin up and down as you push. Turn them off from the menu bar.",
  },
  {
    title: "Drag the canister to move it",
    text: "Grab the red canister to carry the whole vacuum somewhere else. It remembers where you left it.",
  },
  {
    title: "Out of the way",
    text: "Clicks only land on the vacuum when your pointer is over it. Everywhere else, your desktop works exactly as before.",
  },
  {
    title: "Lives in the menu bar",
    text: "No Dock icon. The menu bar item lets you empty the bag, open it in Finder, bring the vacuum back or quit.",
  },
];

export const permissions = [
  {
    kind: "Automation · Finder",
    title: "Control Finder",
    prompt: "“Vacuum” wants access to control “Finder”.",
    text: "Finder is the only app that knows where each desktop icon sits. Vacuum asks it for the icon positions while you vacuum, and later tells it where to put each icon back. It does not open, rename or delete anything through Finder.",
  },
  {
    kind: "Files · Desktop folder",
    title: "Access your Desktop folder",
    prompt: "“Vacuum” would like to access files in your Desktop folder.",
    text: "Vacuum moves a file from your Desktop into its bag when it is sucked up, and back again when you empty the bag. It never reads what is inside your files.",
  },
];

export const notNeeded = ["Accessibility", "Screen Recording", "Full Disk Access", "Network", "An account"];
