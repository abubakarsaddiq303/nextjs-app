import Image from "next/image";
const Team = () => {
  return (
    <div className="team" id="section1">
      <h1 className="team-h">VENTURE</h1>
      <div className="the-team">
        <div className="team-person1">
          <Image src="/Haider.png" width={300} height={400} />
          GHULAM HAIDER
        </div>
        <div className="team-person2">
          <Image src="/ikram.png" width={300} height={400} />
          Dr. IKRAM ASHRAF
        </div>
        <div className="team-person3">
          <Image src="/auth.png" width={300} height={400} />
          AUTHORNATE
        </div>
      </div>
    </div>
  );
};

export default Team;
