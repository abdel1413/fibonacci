const britishToAmerican = (sentence) => {
  const lookup = {
    "colour": "color",
    "flavour": "flavor",
    "honour": "honor",
    "neighbour": "neighbor",
    "labour": "labor",
    "humour": "humor",
    "centre": "center",
    "fibre": "fiber",
    "defence": "defense",
    "offence": "offense",
    "organise": "organize",
    "recognise": "recognize",
    "analyse": "analyze"
  };

  const regex = /colour|flavour|honour|neighbour|labour|humour|centre|fibre|defence|offence|organise|recognise|analyse/gi;

  return sentence.replace(regex, (word) => {
    const americanWd = lookup[word].toLowerCase();

    if (word === word.toUpperCase()) {
      return americanWd.toUpperCase();
    }
    if (word[0] === word[0].toUpperCase()) {
      return (americanWd[0].toUpperCase() + americanWd.slice(1));
    }

    return americanWd;
  });
};



//
