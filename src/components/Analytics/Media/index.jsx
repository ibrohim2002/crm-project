import React, { useEffect, useState } from "react";
import { Container, Title, Wrapper } from "./style";
import Instagram from "../../../assets/icons/instagram.svg?react";
import Telegram from "../../../assets/icons/telegram.svg?react";
import Youtube from "../../../assets/icons/youtube.svg?react";
import Linkedin from "../../../assets/icons/linkedin.svg?react";
import Tiktok from "../../../assets/icons/tiktok.svg?react";
import ArrowUp from "../../../assets/statistics/arrow-up.svg?react";

export const Media = () => {
  const url =
    "https://sheet.best/api/sheets/08c05757-65c7-4e6a-a744-36ad0714d2a1/tabs/media";

  const [media, setMedia] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setMedia(res));
  }, []);
  return (
    <>
      <Title.Container>Ijtimoiy tarmoqlar</Title.Container>
      <Container>
        {media.map((item) => {
          let icon;
          switch (item.title) {
            case "Telegram":
              icon = <Telegram />;
              break;
            case "Instagram":
              icon = <Instagram />;
              break;
            case "YouTube":
              icon = <Youtube />;
              break;
            case "TikTok":
              icon = <Tiktok />;
              break;
            case "Linkedin":
              icon = <Linkedin />;
              break;
            default:
              "";
          }
          return (
            <Wrapper key={item.id}>
              <Container.Card>
                {icon}
                <Title>{item.title}</Title>
              </Container.Card>
              <Container.Card>
                <ArrowUp />
                <Title.Percent>
                  +{Math.round(
                    ((item.subscribers - item.lastMonth) / item.lastMonth) * 100
                  )}
                  %
                </Title.Percent>
                <Title.Number>
                  {Math.round(item.subscribers / 100) / 10}k
                </Title.Number>
              </Container.Card>
            </Wrapper>
          );
        })}
      </Container>
    </>
  );
};
