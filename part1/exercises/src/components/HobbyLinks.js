export default function HobbyLinks() {
    const hobbyLinks = ["https://philly.curbed.com/maps/best-hiking-trails-philadelphia-region", "https://www.takemefishing.org/"];
    return (
      <div>
        <h3>My Hobbies</h3>
        <a href = {hobbyLinks[0]}>Hiking</a>
        <a href = {hobbyLinks[1]}>Fishing</a>
      </div>
    );
}