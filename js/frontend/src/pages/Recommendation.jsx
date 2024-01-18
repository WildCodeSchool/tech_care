import Header from "../components/Header";
import Reco from "../components/Reco";

function Recommendation() {
  return (
    <div>
      <Header />
      <h1 className="selection">Votre sélection de parfum</h1>
      <Reco />
    </div>
  );
}

export default Recommendation;
