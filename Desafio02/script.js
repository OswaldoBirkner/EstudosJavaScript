function getCountryInfo() {
    const select = document.getElementById("country-select");
    const countryName = select.value;

    if (countryName) {
        const apiUrl = "https://restcountries.com/v3.1/name/" + encodeURIComponent(countryName) + "?fullText=true";

        fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                const countryInfoDiv = document.getElementById("country-info");
                countryInfoDiv.innerHTML = "";

                const countryNameHeading = document.createElement("h2");
                countryNameHeading.textContent = data[0].name.common;
                countryInfoDiv.appendChild(countryNameHeading);

                for (const key in data[0]) {
                    const infoParagraph = document.createElement("p");

                    if (key === "name") {
                        infoParagraph.textContent = "Nome: " + data[0].name.common;
                    } else if (key === "population") {
                        infoParagraph.textContent = "População: " + data[0].population.toLocaleString();
                    } else if (key === "area") {
                        infoParagraph.textContent = "Área: " + data[0].area.toLocaleString() + " km²";
                    } else if (key === "capital") {
                        infoParagraph.textContent = "Capital: " + data[0].capital;
                    } else if (key === "languages") {
                        const languages = data[0].languages;
                        const languageKeys = Object.keys(languages);
                        let languageInfo = "Línguas: ";
                        for (let i = 0; i < languageKeys.length; i++) {
                            languageInfo += languages[languageKeys[i]];
                            if (i !== languageKeys.length - 1) {
                                languageInfo += ", ";
                            }
                        }
                        infoParagraph.textContent = languageInfo;
                    } else if (key === "currencies") {
                        const currencies = data[0].currencies;
                        const currencyKeys = Object.keys(currencies);
                        let currencyInfo = "Moedas: ";
                        for (let i = 0; i < currencyKeys.length; i++) {
                            currencyInfo += currencies[currencyKeys[i]].name + " (" + currencies[currencyKeys[i]].symbol + ")";
                            if (i !== currencyKeys.length - 1) {
                                currencyInfo += ", ";
                            }
                        }
                        infoParagraph.textContent = currencyInfo;
                    } else if (key === "region") {
                        infoParagraph.textContent = "Região: " + data[0].region;
                    } else if (key === "subregion") {
                        infoParagraph.textContent = "Sub-região: " + data[0].subregion;
                    } else if (key === "timezones") {
                        const timezones = data[0].timezones;
                        let timezoneInfo = "Fuso horário: ";
                        for (let i = 0; i < timezones.length; i++) {
                            timezoneInfo += timezones[i];
                            if (i !== timezones.length - 1) {
                                timezoneInfo += ", ";
                            }
                        }
                        infoParagraph.textContent = timezoneInfo;
                    } else if (key === "borders") {
                        const borders = data[0].borders;
                        let bordersInfo = "Fronteiras: ";
                        for (let i = 0; i < borders.length; i++) {
                            bordersInfo += borders[i];
                            if (i !== borders.length - 1) {
                                bordersInfo += ", ";
                            }
                        }
                        infoParagraph.textContent = bordersInfo;
                    } else if (key === "nativeName") {
                        infoParagraph.textContent = "Nome nativo: " + data[0].nativeName;
                    } else if (key === "numericCode") {
                        infoParagraph.textContent = "Código numérico: " + data[0].numericCode;
                    } else if (key === "flags") {
                        const flagImg = document.createElement("img");
                        flagImg.src = data[0].flags.png;
                        flagImg.alt = "Bandeira do(a) " + data[0].name.common;
                        flagImg.classList.add("country-flag");
                        countryInfoDiv.appendChild(flagImg);
                        continue;
                    } else {
                        infoParagraph.textContent = key + ": " + data[0][key];
                    }

                    countryInfoDiv.appendChild(infoParagraph);
                }

            })
            .catch(function(error) {
                console.log("Erro ao buscar informações do país:", error);
            });
    }
}
