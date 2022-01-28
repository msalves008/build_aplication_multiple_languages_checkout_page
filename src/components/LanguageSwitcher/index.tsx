import React from 'react';
import { useTranslation } from 'react-i18next';
import br from "./../../assets/br.svg";
import us from "./../../assets/us.svg";
import { Container } from './styles';

const languageOptions = [
  { name: 'Português', value: 'ptBR', flag: br },
  { name: 'English', value: 'en', flag: us },
]

const LanguageSwitcher: React.FC = () => {
  const {t, i18n} = useTranslation();
  return (
    <Container>
      <div className="language-switcher">
        <p>{t("selectYourLanguage")}</p>
        {languageOptions.map(lang =>(
          <button key={lang.name} onClick={()=>{
            i18n.changeLanguage(lang.value);
            console.log(lang.value);
          }}>
            <img src={lang.flag} alt={lang.name} />
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </Container>
  );
};

export default LanguageSwitcher;
