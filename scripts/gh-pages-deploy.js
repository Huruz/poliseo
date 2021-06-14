const execa = require("execa");
  const fs = require("fs");

  (async () => {
    try {
      //await execa("git", ["checkout", "--orphan", "gh-pages"]);
      console.log("Building...");
      await execa("npm", ["run", "build"]);
      // Understand if it's dist or build folder
      const folderName = fs.existsSync("dist") ? "dist" : "build";
      await execa("git", ["add", folderName]);
      await execa("git", ["commit", folderName, "-m", "'Changes gh-pages subtreecommit'"]);
      console.log("Pushing to gh-pages...");
      await execa("git", ["subtree", "push", "--prefix", folderName, "origin", "gh-pages"]);
      //await execa("rm", ["-r", folderName]);
      //await execa("git", ["checkout", "-f", "master"]);
      //await execa("git", ["branch", "-D", "gh-pages"]);
      console.log("Successfully deployed");
    } catch (e) {
      console.log(e.message);
      process.exit(1);
    }
  })();