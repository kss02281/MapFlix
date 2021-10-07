const countryData = [
  { country: "cn", value: 1 },
  { country: "us", value: 3 },
  { country: "in", value: 2 },
  { country: "br", value: 3 },
  { country: "gb", value: 3 },
  { country: "ru", value: 3 },
  { country: "tr", value: 3 },
  { country: "fr", value: 3 },
  { country: "ir", value: 3 },
  { country: "ar", value: 3 },
  { country: "es", value: 3 },
  { country: "de", value: 3 },
  { country: "it", value: 3 },
  { country: "co", value: 3 },
  { country: "ca", value: 3 },
  { country: "mx", value: 3 },
  { country: "no", value: 3 },
  { country: "se", value: 3 },
  { country: "fi", value: 3 },
  { country: "au", value: 3 },
  { country: "pe", value: 3 },
  { country: "cl", value: 3 },
  { country: "kr", value: 3 },
  { country: "kp", value: 1 },
  { country: "pg", value: 2 },
  { country: "za", value: 3 },
  { country: "ng", value: 3 },
  { country: "nz", value: 3 },
  { country: "bz", value: 2 },
  { country: "gt", value: 3 },
  { country: "ma", value: 3 },
  { country: "mn", value: 2 },
  { country: "kz", value: 2 },
  { country: "uz", value: 2 },
  { country: "kg", value: 2 },
  { country: "tm", value: 2 },
  { country: "az", value: 2 },
  { country: "ge", value: 2 },
  { country: "ir", value: 2 },
  { country: "jp", value: 3 },
  { country: "dz", value: 2 },
  { country: "ly", value: 2 },
  { country: "ne", value: 2 },
  { country: "td", value: 2 },
  { country: "mr", value: 2 },
  { country: "cf", value: 2 },
  { country: "ss", value: 2 },
  { country: "et", value: 2 },
  { country: "cd", value: 2 },
  { country: "id", value: 3 },
  { country: "ph", value: 3 },
  { country: "my", value: 3 },
  { country: "vn", value: 3 },
  { country: "kh", value: 3 },
  { country: "mx", value: 3 },
  { country: "sy", value: 1 },
  { country: "iq", value: 2 },
  { country: "np", value: 2 },
  { country: "bt", value: 2 },
  { country: "mm", value: 3 },
  { country: "la", value: 2 },
  { country: "tw", value: 3 },
  { country: "pk", value: 3 },
  { country: "af", value: 2 },
  { country: "sr", value: 2 },
  { country: "gy", value: 2 },
  { country: "ve", value: 3 },
  { country: "co", value: 3 },
  { country: "ec", value: 3 },
  { country: "uy", value: 3 },
  { country: "bo", value: 3 },
  { country: "py", value: 3 },
  { country: "ml", value: 2 },
  { country: "ne", value: 2 },
  { country: "cm", value: 2 },
  { country: "td", value: 2 },
  { country: "ly", value: 2 },
  { country: "sd", value: 2 },
  { country: "ao", value: 2 },
  { country: "na", value: 2 },
  { country: "tz", value: 2 },
  { country: "eg", value: 3 },
  { country: "sa", value: 3 },
  { country: "jo", value: 3 },
  { country: "om", value: 3 },
  { country: "ae", value: 3 },
  { country: "ye", value: 2 },
  { country: "so", value: 2 },
  { country: "et", value: 2 },
  { country: "ke", value: 2 },
  { country: "ug", value: 2 },
  { country: "mz", value: 2 },
  { country: "zw", value: 2 },
  { country: "zm", value: 2 },
  { country: "bw", value: 2 },
  { country: "mg", value: 2 },
  { country: "cg", value: 2 },
  { country: "ga", value: 2 },
  { country: "cu", value: 2 },
  { country: "sv", value: 2 },
  { country: "hn", value: 3 },
  { country: "pa", value: 3 },
  { country: "ni", value: 3 },
  { country: "cr", value: 3 },
  { country: "ht", value: 2 },
  { country: "gh", value: 2 },
  { country: "tg", value: 2 },
  { country: "ci", value: 2 },
  { country: "lr", value: 2 },
  { country: "sl", value: 2 },
  { country: "bj", value: 2 },
  { country: "bf", value: 2 },
  { country: "gn", value: 2 },
  { country: "gw", value: 2 },
  { country: "gm", value: 2 },
  { country: "sn", value: 2 },
  { country: "do", value: 3 },
  { country: "pr", value: 2 },
  { country: "is", value: 3 },
  { country: "sn", value: 2 },
  { country: "de", value: 3 },
  { country: "ch", value: 3 },
  { country: "ba", value: 2 },
  { country: "mk", value: 2 },
  { country: "md", value: 2 },
  { country: "al", value: 2 },
  { country: "me", value: 2 },
  { country: "gr", value: 3 },
  { country: "bg", value: 3 },
  { country: "ua", value: 3 },
  { country: "dk", value: 3 },
  { country: "cz", value: 3 },
  { country: "hr", value: 3 },
  { country: "hu", value: 3 },
  { country: "rs", value: 3 },
  { country: "si", value: 3 },
  { country: "at", value: 3 },
  { country: "cz", value: 3 },
  { country: "lt", value: 3 },
  { country: "lv", value: 3 },
  { country: "ee", value: 3 },
  { country: "by", value: 2 },
  { country: "pl", value: 3 },
  { country: "nl", value: 3 },
  { country: "ie", value: 3 },
  { country: "er", value: 2 },
  { country: "tj", value: 2 },
  { country: "sk", value: 3 },
  { country: "ro", value: 3 },
  { country: "be", value: 3 },
  { country: "pt", value: 3 },
  { country: "tn", value: 2 },
  { country: "bd", value: 3 },
  { country: "som", value: 2 },
  { country: "dj", value: 2 },
  { country: "bd", value: 3 },
  { country: "gq", value: 2 },
  { country: "bi", value: 2 },
  { country: "mw", value: 2 },
  { country: "rw", value: 2 },
  { country: "xk", value: 2 },
  { country: "am", value: 2 },
  { country: "lk", value: 3 },
  { country: "th", value: 3 },
];

export { countryData };
