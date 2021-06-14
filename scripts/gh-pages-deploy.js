const execa = require("execa");
  const fs = require("fs");

  (async () => {
    try {
      console.log("Building...");
      await execa("npm", ["run", "build"]);
      const folderName = fs.existsSync("dist") ? "dist" : "build";
      await execa("git", ["add", "-f", folderName]);
      await execa("git", ["commit", folderName, "-m", "'Changes gh-pages subtreecommit'"]);
      console.log("Pushing to gh-pages...");
      await execa("git", ["subtree", "push", "--prefix", folderName, "origin", "gh-pages"]);
      console.log("Successfully deployed");
    } catch (e) {
      console.log(e.message);
      process.exit(1);
    }
  })();