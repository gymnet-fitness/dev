import React from 'react';
import { bool, object } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { propTypes } from '../../util/types';
import config from '../../config';
import {
  Page,
  SectionHero,
  SectionHowItWorks,
  SectionLocations,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarContainer } from '../../containers';

import facebookImage from '../../assets/yogatimeFacebook-1200x630.jpg';
import twitterImage from '../../assets/yogatimeTwitter-600x314.jpg';
import css from './LandingPage.module.css';

  // Importing Brandpush trust badge
import rightLeaf from '../../assets/rightleaf.png';
import leftLeaf from '../../assets/leftleaf.png';
import usaToday from '../../assets/usatoday.png';
import digitalJournal from '../../assets/digitaljournal.png';
import ncn from '../../assets/ncn.png';
import marketWatch from '../../assets/marketwatch.png';
import benzinga from '../../assets/benzinga.png';
import checkmark from '../../assets/checkmark.png';

export const LandingPageComponent = props => {
  const {
    history,
    intl,
    location,
    scrollingDisabled,
    currentUserListing,
    currentUserListingFetched,
  } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
      ]}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <div className={css.heroContainer}>
            <SectionHero className={css.hero} history={history} location={location} />
          </div>
	  <>
  {/* Trust Badge created and verified by https://www.brandpush.co */}{" "}
  <div style={{ width: "100%", marginTop: 10, all: "unset" }}>
    <style
      scoped=""
      dangerouslySetInnerHTML={{
        __html:
          " .brandpush-logo-container-item { height: 100px; position: relative; } .brandpush-vertical-center { margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); text-align: center; } .brandpush-vertical-center img.brandpush-news-logo{ width: 100%; max-width: 100px; height: auto; margin: 7px 10px; } @media screen and (min-width: 585px) { .brandpush-leaf {opacity:0.2 !important;} .brandpush-logo-container{padding: 0 20px;} } @media screen and (max-width: 584px) { .brandpush-news-logo {max-width:70px !important;} .brandpush-title {font-size: 15px;top: -5px;letter-spacing: 6px;} } @media screen and (max-width: 340px) { .brandpush-title-hr { display:none; !important; } .brandpush-title {font-size:14px;padding:0 !important;} .brandpush-footer {font-size:11px !important;margin:20px 0 25px 0 !important;letter-spacing: 2px !important;} .brandpush-news-logo{max-width:50px !important;} } #brandpush-trust-badge {box-shadow: 0 18px 50px rgb(0 0 0 / 7%); -webkit-transition: box-shadow 0.3s;} "
      }}
    />
    <div
      id="brandpush-trust-badge"
      style={{
        position: "relative",
        width: "100%",
        background: "#70f5cb",
        borderRadius: 10,
        minHeight: 180,
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "30px 5px 15px 5px",
          fontSize: 18,
          fontFamily: "sans-serif",
          fontWeight: 600,
          letterSpacing: 8
        }}
      >
        <div>
          <span
            className="brandpush-title-hr"
            style={{
              borderTop: "1.5px solid #4A4A4A",
              position: "absolute",
              padding: 0,
              margin: "0 0 0 5%",
              width: "90%",
              top: 30,
              left: 0,
              zIndex: 0
            }}
          />
          <span
            className="brandpush-title"
            style={{
              backgroundColor: "#70f5cb",
              zIndex: 1,
              position: "relative",
              padding: "0 20px",
              margin: 0,
              top: "-13px",
              color: "#4A4A4A"
            }}
          >
            AS SEEN ON
          </span>
        </div>
        <div
          className="brandpush-logo-container"
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          
          <div className="brandpush-logo-container-item">
            <div className="brandpush-vertical-center">
              <a
                href="http://finance.azcentral.com/azcentral/article/getnews-2023-3-10-atlanta-based-startup-gymnet-is-revolutionizing-the-fitness-industry-with-their-innovative-new-workout-model/
 "
                target="_Blank"
                rel="nofollow"
              >
                <img
                  alt="Featured on USA Today"
                  className="brandpush-news-logo"
                  style={{ maxWidth: 100 }}
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIzNTAuMDAwMDAwcHQiIGhlaWdodD0iMTY4LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMzUwLjAwMDAwMCAxNjguMDAwMDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNTAuMDAwMDAwLDIzMC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+Cgo8cGF0aCBkPSJNMzQyNCAyMjI5IGMtOTQgLTM2IC0xNDYgLTEwOSAtMTQ2IC0yMDUgLTEgLTEwNCA1NCAtMTYzIDE5MyAtMjA5IDk0IC0zMiAxMjIgLTUyIDEyMiAtODggMCAtMzYgLTE4IC01NSAtNjAgLTYzIC00NiAtOSAtMTA5IDExIC0xNTYgNDggLTIxIDE2IC00MCAyOCAtNDEgMjcgLTEyIC0xNSAtODQgLTExNiAtODkgLTEyNiAtMTAgLTE2IDc2IC03MSAxMzggLTg4IDE1NyAtNDQgMzA4IC0xMCAzNzAgODQgMTQgMjEgMzAgNjIgMzYgOTIgMjcgMTI5IC00OCAyMjIgLTIyMCAyNzMgLTYzIDE5IC05MSA0MCAtOTEgNzEgMCAzNiAyNCA0OCA4OCA0MyAzOSAtMyA2OSAtMTEgODkgLTI2IDE3IC0xMiAzNCAtMjIgMzcgLTIyIDggMCA4NiAxMTcgODYgMTI5IDAgMTUgLTYwIDQ3IC0xMTkgNjUgLTc0IDIyIC0xNzQgMjAgLTIzNyAtNXoiLz4KPHBhdGggZD0iTTI1NTQgMjIyNiBjLTMgLTggLTQgLTEzMSAtMiAtMjczIDMgLTI0NyA0IC0yNjAgMjYgLTMwNiA0OCAtOTYgMTM5IC0xNDAgMjkyIC0xNDAgMTA4IDAgMTc5IDIyIDIzNiA3NSA3MiA2NyA3OSAxMDAgNzkgMzk4IGwwIDI1NSAtMTAwIDAgLTEwMCAwIC01IC0yNDAgYy01IC0yNjIgLTEwIC0yODQgLTY2IC0zMDUgLTUyIC0yMCAtMTIxIC0yIC0xNDAgMzcgLTUgMTAgLTExIDEyOCAtMTQgMjYzIGwtNSAyNDUgLTk4IDMgYy03OCAyIC05OCAwIC0xMDMgLTEyeiIvPgo8cGF0aCBkPSJNNDA3MSAyMjIyIGMtNSAtMTAgLTMyIC03OSAtNTkgLTE1MyAtNTMgLTE0NSAtMTg2IC01MDMgLTE5NyAtNTMxIC03IC0xNiAyIC0xOCA5NyAtMTggbDEwNCAwIDE1IDQ4IDE1IDQ3IDEzOCAwIDEzOSAwIDE0IC00NyAxNCAtNDggMTA0IDAgYzYzIDAgMTA1IDQgMTA1IDEwIDAgNSAtMTEgMzggLTI1IDcyIC0xMyAzNSAtNzAgMTg3IC0xMjYgMzM4IC01NiAxNTEgLTEwNiAyODEgLTExMSAyODggLTcgOCAtNDMgMTIgLTExNCAxMiAtOTAgMCAtMTA1IC0yIC0xMTMgLTE4eiBtMTYwIC0zMjAgYzE2IC01MSAyOSAtOTkgMjkgLTEwNyAwIC0xMiAtMTUgLTE1IC03MyAtMTUgLTQxIDAgLTc2IDIgLTc5IDUgLTMgMyAxMCA1MyAyOCAxMTAgMTkgNTggMzQgMTE1IDM0IDEyOCAwIDM4IDE0IDQxIDI0IDUgNSAtMTggMjEgLTc1IDM3IC0xMjZ6Ii8+CjxwYXRoIGQ9Ik0zNDM5IDEzODAgYy0yMjcgLTM5IC0zNTggLTI2MSAtMjg5IC00OTIgMTYgLTU2IDcwIC0xMjggMTI1IC0xNzAgNzAgLTU0IDEzOSAtNzMgMjU1IC03MiAxMjIgMSAxOTIgMjYgMjY3IDk3IDIyNyAyMTUgMTEyIDU4OCAtMTk3IDYzNyAtNzMgMTEgLTk1IDExIC0xNjEgMHogbTE2NyAtMTkxIGM5OSAtNDcgMTMxIC0yMDUgNjIgLTMwMiAtNDEgLTU4IC0xNDkgLTg0IC0yMjEgLTUzIC0zOSAxNiAtODIgNjEgLTk2IDk5IC0yNiA2OSAtMyAxODcgNDUgMjI4IDYxIDUyIDEzOSA2MyAyMTAgMjh6Ii8+CjxwYXRoIGQ9Ik0yNTUwIDEyOTAgbDAgLTc5IDg4IC0zIDg3IC0zIDMgLTI3MiAyIC0yNzMgMTA1IDAgMTA1IDAgMCAyNzUgMCAyNzUgODUgMCA4NSAwIDAgODAgMCA4MCAtMjgwIDAgLTI4MCAwIDAgLTgweiIvPgo8cGF0aCBkPSJNMzk5MCAxMDE1IGwwIC0zNTcgMjAzIDQgYzE5OCAzIDIwMyA0IDI2NCAzMiAxMjggNTkgMTkzIDE2NyAxOTMgMzIxIDAgMTE0IC0yNiAxODMgLTk0IDI1MSAtODUgODUgLTEzMSA5OCAtMzY4IDEwMiBsLTE5OCA0IDAgLTM1N3ogbTM1NiAxNzAgYzY4IC0zNCA5NCAtODAgOTQgLTE2OSAwIC0xMjUgLTU5IC0xODkgLTE3NCAtMTkwIC0zNCAtMSAtNjIgMiAtNjMgNyAtMiA0IC0zIDkwIC0zIDE5MiBsMCAxODUgNDggMCBjMzEgMCA2NiAtOSA5OCAtMjV6Ii8+CjxwYXRoIGQ9Ik00ODYyIDEyODggYy0zNyAtMTAxIC0yMTggLTU4NiAtMjI3IC02MTAgLTcgLTE2IDIgLTE4IDk3IC0xOCBsMTA0IDAgMTUgNDggMTUgNDcgMTM2IDMgMTM2IDMgMTcgLTUxIDE3IC01MCAxMDQgMCBjOTkgMCAxMDUgMSA5OSAxOSAtMyAxMSAtNjEgMTY5IC0xMjkgMzUzIGwtMTI0IDMzMyAtMTE1IDMgLTExNSAzIC0zMCAtODN6IG0xODMgLTIzMCBjMTkgLTY1IDM1IC0xMjIgMzUgLTEyOCAwIC02IC0zMyAtMTAgLTgxIC0xMCAtNjggMCAtODAgMiAtNzUgMTUgMyA5IDIwIDY0IDM3IDEyMyA0MSAxMzkgNDEgMTM5IDQ1IDEyNyAyIC01IDE5IC02MyAzOSAtMTI3eiIvPgo8cGF0aCBkPSJNNTI1MCAxMzYyIGMwIC00IDQgLTEyIDkgLTE3IDUgLTYgNjQgLTEwNCAxMzAgLTIxOSBsMTIxIC0yMDkgMCAtMTI4IDAgLTEyOSAxMTAgMCAxMTAgMCAwIDEyNiAwIDEyNyAxMzAgMjI0IGM3MiAxMjMgMTMwIDIyNiAxMzAgMjI5IDAgMyAtNDggMyAtMTA3IDIgbC0xMDggLTMgLTYzIC0xMTUgYy0zNCAtNjMgLTY2IC0xMjggLTcwIC0xNDUgLTEwIC0zNiAtMjQgLTM1IC0zNCAyIC00IDE2IC0zNiA4MCAtNzAgMTQzIGwtNjMgMTE1IC0xMTIgMyBjLTYyIDEgLTExMyAtMSAtMTEzIC02eiIvPgo8L2c+Cjwvc3ZnPg=="
                />
              </a>
              <a
                href="https://digitaljournal.com/pr/news/atlanta-based-startup-gymnet-is-revolutionizing-the-fitness-industry-with-their-innovative-new-workout-model
 "
                target="_Blank"
                rel="nofollow"
              >
                <img
                  alt="Featured on DigitalJournal"
                  className="brandpush-news-logo"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NTEuNTkgMjI1LjA3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMDAwMDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGlkPSJDYXBhXzItMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeT0iMC43OSIgd2lkdGg9IjU5LjI1IiBoZWlnaHQ9IjkwIi8+PHBhdGggZD0iTTY5LjU5LDEuNGgzNC42NWEzOC44MSwzOC44MSwwLDAsMSwxNywzLjQ3LDI3LjYxLDI3LjYxLDAsMCwxLDExLjMzLDkuNzksNDIuMzYsNDIuMzYsMCwwLDEsNC44LDEzLDg2Ljg4LDg2Ljg4LDAsMCwxLDEuNjgsMTguMDcsODYuNCw4Ni40LDAsMCwxLTEuNzEsMTgsNDguNjEsNDguNjEsMCwwLDEtNC41MiwxMy4xMSwyNy42NCwyNy42NCwwLDAsMS0xMS4yMSw5Ljg2LDM3Ljg3LDM3Ljg3LDAsMCwxLTE2Ljg0LDMuNDdINjkuNTlWODMuOTFoNi4xN1Y3LjY3SDY5LjU5Wk05MS4xLDg0SDEwMXE3LjY5LDAsMTEtMi4xOSwxMS45MS03LjU1LDExLjkyLTM2LjQ1LDAtMjcuOTMtMTEuNDMtMzUuMTFhMTQuMjEsMTQuMjEsMCwwLDAtNS4wNy0yLDM3LjE1LDM3LjE1LDAsMCwwLTcuMDktLjZIOTEuMVoiLz48cGF0aCBkPSJNMTQxLjc2LDEuNEgxNzJWNy42N2gtN1Y4My45MWg3djYuMjdIMTQxLjc2VjgzLjkxaDcuODNWNy42N2gtNy44M1oiLz48cGF0aCBkPSJNMjQxLjM3LDc2Ljg1UTIzMS4wNSw5Mi4xOCwyMTIuMTYsOTEuNywxOTEsOTEuNTIsMTgyLjcxLDc3LjUydi4wNlExNzYsNjcuMDUsMTc2LDQ2LjNxMC0yMS42LDcuMDktMzIuMTJ2LjA2UTE5MSwuMTgsMjEzLjA4LDBhMzcuODEsMzcuODEsMCwwLDEsMjQuNjMsOC40NmwxLjk1LDE1LjY0aC03LjI3YTE4LjI0LDE4LjI0LDAsMCwwLTQuOTUtMTIuNzJxLTQuODktNS4xMi0xNC4zLTUuMTctMTAuNTEtLjEyLTE1LjkyLDEwdC01LjgzLDI5Ljg3cS40MiwxOS40MSw1LjYyLDI5LjQ4dDE1LjIxLDEwYTIxLjUzLDIxLjUzLDAsMCwwLDgtMS42NywxNy44MywxNy44MywwLDAsMCw2LjA4LTQuMjlWNTYuNDFoLTguNjhWNTBoMjkuMDl2Ni4zMmgtNS4zOFoiLz48cGF0aCBkPSJNMjQ4LjI0LDEuNGgzMC4xOVY3LjY3aC03VjgzLjkxaDd2Ni4yN0gyNDguMjRWODMuOTFoNy44MlY3LjY3aC03LjgyWiIvPjxwYXRoIGQ9Ik0zNDcuMjMsMS40bDIuMzIsMTYuMTJIMzQzcS0xLjQ3LTkuODUtNi45LTkuODVIMzIyLjc4VjgzLjkxaDYuMDV2Ni4yN0gzMDEuMDlWODMuOTFoNi4zNlY3LjY3SDI5NC4xOXEtNS40NCwwLTYuOTEsOS44NWgtNi42TDI4MywxLjRaIi8+PHBhdGggZD0iTTM0Mi43NSw5MC4xOFY4NGg2LjU0cTYuNDgtMjAuNjIsMTMtNDEuMzJUMzc1LjIsMS40SDM4Mkw0MDguNjMsODRINDE1djYuMjFIMzg4LjUyVjg0SDM5M2wtMS44OS01LjlxLS45MS0yLjg2LTEuODMtNS42OWwtMS44NC01LjcycS0uOTItMi44OS0xLjg5LTUuOTNIMzY0Yy0uNjUsMi0xLjI4LDQtMS44Nyw1LjlzLTEuMTgsMy44LTEuNzcsNS42OS0xLjE4LDMuNzgtMS43Nyw1LjY5LTEuMjEsMy44OS0xLjg2LDZoNC42NHY2LjIxWk0zODMuNjMsNTQuNHEtMi4zMS02Ljk0LTQuNTItMTMuNjlUMzc0LjY1LDI3cS0yLjI2LDcuMDUtNC4zNCwxMy42M0wzNjYsNTQuNFoiLz48cGF0aCBkPSJNNDQyLjEsODMuOTFoMjkuMjFxNS40NCwwLDYuOTEtOS45Mmg2LjZMNDgyLjUsOTAuMThINDIwLjU5VjgzLjkxaDYuMDVWNy42N2gtNi4xN1YxLjRINDQ4VjcuNjdINDQyLjFaIi8+PHBhdGggZD0iTTgyLjEyLDExNy43OWgtNi42di02LjI3SDEwNHY2LjI3SDk3LjUydjc0LjZxLS4xMiwxNC40OC01LjQ0LDIyLjc2LTUuNTEsOC41Mi0xOS4yNSw5LjkybC0yLjY5LTUuODVxMTItLjQyLDEyLTI3LjA3WiIvPjxwYXRoIGQ9Ik0xNDIuNzQsMTEwLjA2cTM0LjQ3LDAsMzQuNDcsNDUuODJUMTQyLjgsMjAxLjc2cS0zNC40LDAtMzQuNC00NS44OFQxNDIuNzQsMTEwLjA2Wm0wLDYuMzNxLTE4Ljk0LDAtMTguOTQsMzkuNDl0MTksMzkuNTVxMTguOTQsMCwxOC45NS0zOS40OVQxNDIuNzQsMTE2LjM5WiIvPjxwYXRoIGQ9Ik0yMzIuMjYsMTExLjUyaDIwdjYuMjdIMjQ2djQ1Ljg4cTAsMzcuNzktMjksMzcuNzktMTcuMjIsMC0yNC42Mi0xMS4xNC02LTkuMTgtNi0yNi44M3YtNDUuN2gtNi4zdi02LjI3aDI3LjY5djYuMjdoLTZWMTY0cTAsMTUuMzUsMi4zOCwyMS4yNCwzLjcyLDkuODUsMTUuODMsOS44NiwxOC4zMywwLDE4LjMzLTMxLjY0VjExNy43OWgtNi4wNVoiLz48cGF0aCBkPSJNMjgwLjQ0LDE5NEgyODd2Ni4yN0gyNTguODFWMTk0bDYuMTcuMDZ2LTc2LjNoLTYuMTd2LTYuMjdoMzcuNGEzNi43NSwzNi43NSwwLDAsMSwxMC43LDEuNSwzMC45NCwzMC45NCwwLDAsMSw4LjkyLDQuMjgsMjMuMjYsMjMuMjYsMCwwLDEsNi42OSw3LjgyLDIxLjY2LDIxLjY2LDAsMCwxLDIuMzUsMTAuMTMsMjAuNDgsMjAuNDgsMCwwLDEtMS42Miw4LDI1LjE3LDI1LjE3LDAsMCwxLTQuNjEsNy4xMiwzMC43NCwzMC43NCwwLDAsMS02LDQuOCwyNS42OCwyNS42OCwwLDAsMS03LDMsNjksNjksMCwwLDAsNy44OSwxN0ExNTYuMiwxNTYuMiwwLDAsMCwzMjcuNjIsMTk0aDYuNnY2LjI3aC0xOS44YTE5MS42OSwxOTEuNjksMCwwLDEtMTMuMzgtMjAsMTgyLjI5LDE4Mi4yOSwwLDAsMS0xMC40NS0yMUgyODAuNDRabTAtNDEuMTloMTUuNDFhOS4xNiw5LjE2LDAsMCwwLDUtMS41NSwxNy45LDE3LjksMCwwLDAsNC41NS00LjQ3LDI4LjI2LDI4LjI2LDAsMCwwLDIuOS01LjcyLDE2Ljg0LDE2Ljg0LDAsMCwwLDEuMDctNS43OCwxOS41OSwxOS41OSwwLDAsMC00LTEyLjIzLDEzLjIzLDEzLjIzLDAsMCwwLTEwLjg4LTUuMzZsLTE0LC4wNloiLz48cGF0aCBkPSJNNDAxLjg2LDExNy43OVYyMDAuM2gtOC4zN0wzNTMsMTMwLjE0VjE5NGg2djYuMjdIMzM5LjcyVjE5NGg2LjE3VjExNy43OWgtNi4xN3YtNi4yN2gxOS43M2wzNS4yNiw2MC4zNlYxMTcuNzloLTZ2LTYuMjdINDA4djYuMjdaIi8+PHBhdGggZD0iTTQxMS41MiwyMDAuM3YtNi4yMWg2LjU0cTYuNDgtMjAuNjIsMTMtNDEuMzF0MTMtNDEuMjZoNi43OGwyNi42NSw4Mi41N2g2LjQxdjYuMjFINDU3LjI5di02LjIxaDQuNTJsLTEuODktNS45LTEuODMtNS42OWMtLjYxLTEuODgtMS4yMy0zLjc5LTEuODQtNS43MmwtMS44OS01LjkzSDQzMi43M3EtMSwzLTEuODcsNS45dC0xLjc3LDUuNjlsLTEuNzcsNS42OXEtLjg4LDIuODctMS44Nyw2aDQuNjV2Ni4yMVptNDAuODgtMzUuNzhxLTIuMzEtNi45My00LjUyLTEzLjY5dC00LjQ2LTEzLjY5cS0yLjI2LDcuMDYtNC4zNCwxMy42M2wtNC4zNCwxMy43NVoiLz48cGF0aCBkPSJNNTA4Ljg3LDE5NGgyOS4yMXE1LjQ1LDAsNi45MS05LjkxaDYuNmwtMi4zMywxNi4xOGgtNjEuOVYxOTRoNi4wNVYxMTcuNzloLTYuMTd2LTYuMjdINTE0Ljh2Ni4yN2gtNS45M1oiLz48L2c+PC9nPjwvc3ZnPg=="
                />
              </a>
              <a
                href="https://www.newschannelnebraska.com/story/48524299/atlantabased-startup-gymnet-is-revolutionizing-the-fitness-industry-with-their-innovative-new-workout-model
 "
                target="_Blank"
                rel="nofollow"
              >
                <img
                  alt="Featured on NCN"
                  className="brandpush-news-logo"
                  style={{ maxWidth: 80 }}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwMCAzMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iNDEuMyA2MjUuOCAyOTA3LjcgMTcyNy4zIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDAwMDAwO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTsiIHdpZHRoPSIyNTAiIGhlaWdodD0iMTUwIiB4bGluazpocmVmPSJFMDc1QjMxRi5wbmciIHRyYW5zZm9ybT0ibWF0cml4KDExLjc0OTYgMCAwIDExLjc0OTYgMzEuMjk0MSA2MTguNzc2NSkiPgo8L2ltYWdlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjg0MSwyMzUzLjFIMTQ5LjNjLTU5LjcsMC0xMDgtNDguNC0xMDgtMTA4VjczMy44YzAtNTkuNyw0OC40LTEwOCwxMDgtMTA4SDI4NDFjNTkuNywwLDEwOCw0OC40LDEwOCwxMDggIHYxNTExLjNDMjk0OS4xLDIzMDQuOCwyOTAwLjcsMjM1My4xLDI4NDEsMjM1My4xeiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjgwNS42LDIxMDIuNmMwLDAtMjMuMy00NC41LTQ4LjctNzguNGMtMjUuNC0zMy45LTQ0LjUtODQuNy01NS4xLTEyMC43Yy0xMC42LTM2LTUwLjgtNjcuOC00Ni42LTExNi41ICBjNC4yLTQ4LjctNi40LTIzNy40LTUwLjgtMjg3LjFjLTI1LjQtMjQuMi0yOS42LTQ5LjctMjcuNS03Ny4yYzIuMS0yNy41LTIuMS04OC45LTI5LjYtMTIwLjdjLTI3LjUtMzEuOC00Ni42LTc0LjEtNDIuNC0xNzMuNyAgYy00NC41LDAtNjcuOCwwLTY3LjgsMHMtNDYuNi05MS4xLTkzLjItOTcuNGMtNDYuNi02LjQtNzQuMS0xMC42LTg2LjgtMzMuOWMtMTIuNy0yMy4zLTM2LTYuNC02Ny44LDBjLTMxLjgsNi40LTQyLjMtMi43LTU5LjMtMTEuOSAgYy0xNi45LTkuMy02MS40LTUtNzQuMSwyMC40cy00Mi4zLDQwLjItNTUuMSw4LjVjLTEyLjctMzEuOC01MC44LTI5LjctNzQuMS00NC41Yy0yMy4zLTE0LjgtNTAuOC00Mi40LTUwLjgtNDIuNEgyNjIuM3Y3OTQuMUg0MzYgIHYtNTY3LjVoMjIyLjN2OTkuNWMwLDAsMjQzLjUtMjQ5LjksNDgwLjctNC4yYy05NS4zLDYzLjUtMjcxLjEsNDE5LjMsNjEuNCw2NTYuNWMwLDQ2LjYsMCw0Ni42LDAsNDYuNnY2LjRIOTU5Ljh2LTQ3Ni41ICBjMCwwLTE3LjYtMTI0LjktMTM0LjEtMTI3LjFjLTEwNS45LDIuMS0xNTAuNCwxMDgtMTUwLjQsMTU4LjhjMCw1MC44LDAsMjA3LjUsMCwyMDcuNWgxNjcuM3YzODEuMkgyODA1LjZ6IE0xMzU3LjIsMTM4Ni44ICBjMTU4LjgtNjUuNiwyNDcuOCw2OS45LDI0Ny44LDY5LjloMjU2LjJjLTI3LjUtMTgwLTIwMy4zLTI3NS4zLTIwMy4zLTI3NS4zdi0zMS44bDIzMC44LTIuMXY3OC4zYzAsMCwwLDAsMTQuOCwwICBjMTIuNy0yNS40LDEyOS4yLTEwMS42LDI2NC43LTkxLjFjMjI4LjcsMjcuNSwyNTYuMiwyNzkuNSwyNTYuMiwyNzkuNXY1NDQuMmgtMjQzLjVjMCwwLDAtNDAyLjQsMC00MzguNHMtMTAuNi0xNjUuMi0xMzUuNS0xNjUuMiAgYy0xMzkuOCw4LjUtMTQxLjksMTQ0LjktMTQxLjksMTQ0Ljl2NDU4LjZoLTI0NS43YzAsMCwwLDAsMC0yOS43YzE3Ny45LTg4LjksMjAzLjMtMjQ5LjksMjAzLjMtMjQ5LjlzLTE5NC44LTIuMS0yNzcuNC0yLjEgIGMtMTE0LjQsMTE0LjQtMjU2LjIsNDYuNi0zMDIuOC0yOS42QzEyMzIuMiwxNTU4LjMsMTI2OC4yLDE0MzEuMywxMzU3LjIsMTM4Ni44eiIvPgo8L3N2Zz4="
                />
              </a>
              <a
                href="https://www.marketwatch.com/press-release/atlanta-based-startup-gymnet-is-revolutionizing-the-fitness-industry-with-their-innovative-new-workout-model-2023-03-09
 "
                target="_Blank"
                rel="nofollow"
              >
                <img
                  alt="Featured on Market Watch"
                  className="brandpush-news-logo"
                  style={{ maxWidth: 83 }}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NzMuMTIgMjI1Ljg3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMDAwMDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGlkPSJDYXBhXzItMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxwYXRoIGQ9Ik0yMTEuNDksMjcuNCwyMTAsMzQuNzhoLS40NWMtMS44OS00LjEzLTcuMTYtOS43Ni0xOC43OC05Ljc2LTE4LjgsMC0zNy45MywxNC41MS00Mi4yOSwzNy40Mi0zLjYyLDIwLDYsMzcuNjgsMjguMywzNy42OCw4LjE0LDAsMTcuNTEtMy4yNiwyMi4zOS0xMGguMzlsLTEuMyw3LjUxSDIxOWwxMy03MC4xMlptLTYuODMsMzQuOTRjLTEuNCw2Ljg3LTcuOTEsMTgtMjAuOTIsMThzLTE1LjM5LTExLjI5LTE0LjI1LTE3LjhhMjEuNjksMjEuNjksMCwwLDEsMjAuNzUtMThDMjAyLjE1LDQ0LjY3LDIwNi4xNSw1NC4wOCwyMDQuNjYsNjIuMzRaIi8+PHBhdGggZD0iTTI0My44MywyNy40aDE5LjUyTDI2MiwzNC43OGguMzlBMjEuOTEsMjEuOTEsMCwwLDEsMjgxLjg3LDI1bC00LDIxLjE1Yy05Ljc2LDAtMTcsMi4xNS0xOC45MSwxM2wtNy4xMiwzOC40M0gyMzAuNzlaIi8+PHBvbHlnb24gcG9pbnRzPSIyOTUuODkgMCAzMTYuOTEgMCAzMDcuMDIgNTIuODEgMzA3LjQxIDUyLjgxIDMzMS42OCAyNy40IDM1Ni4zNSAyNy40IDMyNC4zIDU4LjIxIDM0Mi43MSA5Ny41MSAzMTguOTMgOTcuNTEgMzA1LjM5IDYzLjcxIDMwNS4wNCA2My43MSAyOTguODggOTcuNTEgMjc3Ljc0IDk3LjUxIDI5NS44OSAwIi8+PHBhdGggZD0iTTM5MCwyNC45MmMtMjEuMjgsMC00MC4xOCwxOC4yNi00My43LDM3Ljc4LTMuODcsMjAuNzksMTAuMTYsMzcuMTksMzAuMywzNy4xOWEzOC44NCwzOC44NCwwLDAsMCwyMS02LjUxLDUyLjI1LDUyLjI1LDAsMCwwLDE3LjU0LTE3LjkzSDM5My43YTE4LjI1LDE4LjI1LDAsMCwxLTE0LDYuNTFjLTguMTMsMC0xNC4yNS00Ljg4LTEzLjg5LTEzLjI0aDUyLjY1YTI3LjksMjcuOSwwLDAsMCwxLjQ5LTUuNTNDNDIzLjkyLDQxLjk0LDQxMS40LDI0LjkyLDM5MCwyNC45MlpNMzY4Ljc0LDU0LjY5YTE5LjczLDE5LjczLDAsMCwxLDE4LjI2LTEyYzEwLjksMCwxMy41Myw3Ljg3LDEzLjUzLDEyWiIvPjxwb2x5Z29uIHBvaW50cz0iMTIwLjc4IDAgODMuNzIgNTUuNTcgODMuNDkgNTUuNTcgODMuNDkgMCA2NS41OSAwIDAgOTcuNTEgMjUuNDEgOTcuNTEgNjIuMjEgNDEuOTQgNjIuNTcgNDEuOTQgNjIuNTcgOTcuNTEgODAuNTkgOTcuNTEgMTE3LjM5IDQxLjk0IDExNy43OCA0MS45NCAxMTcuNzggOTcuNTEgMTM4LjggOTcuNTEgMTM4LjggMCAxMjAuNzggMCIvPjxwYXRoIGQ9Ik00NzMuMTIsMjcuNEg0NTkuODVsMy44Ny0yMC44OUg0NDUuMzNsLTEuNDksOGMtMS42Myw5LjE0LTcuMzksMTEuOTEtMTUsMTIuNzZoMGwtMy4yNiwxNS45MUg0MzZMNDI1Ljk0LDk3LjYxaDIwLjg5bDEwLTU0LjIxaDEzLjM4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMyMC4zOSwxOTYuODVjLTYuODksMTUuODctMjMuMjksMjguODktNDIuMjksMjguODktMjEuMjgsMC0zNC40My0xNi43Ni0zMC42OS0zNy42OHMyMi43OC0zNy4yOSw0My45My0zNy4yOWMxOC41NCwwLDMxLjMsMTIuNCwzMS42OSwyOS41NUgzMDEuNzVhMTIuNDUsMTIuNDUsMCwwLDAtMTMuNDEtOS43NmMtOS43Ni0uNDktMTgsNy42NC0xOS45MSwxNy43NnMzLjI2LDE3LjksMTMuNDEsMTcuOWEyMCwyMCwwLDAsMCwxNi44OC05LjM3aDIxLjY3Wk0xNDYuNzEsMTAxLjEybC00MC44MywyNC43NmgxMS41NWwtMzcsNTUuNThoLS4zOVYxMjUuODhoLTE4bC0zNyw1NS41OGgtLjM2VjEyNS44OGgtMjF2OTcuNjFIMjJsMzYuODYtNTUuN2guMzl2NTUuNTdoMThsNjUuMzMtOTcuNjFoMTAuNjFabTM5Ljc2LDEyMi4yNEgxNjUuNjhsMS40LTcuNTFoLS4zOWMtNC44OCw2LjktMTQuMjUsMTAtMjIuMzksMTAtMjIuMjgsMC0zMS45Mi0xNy41MS0yOC4zLTM3LjY4LDQuMTMtMjIuNzcsMjMuNDItMzcuNDIsNDIuMjktMzcuNDIsMTEuNDksMCwxNi44OSw1LjYzLDE4Ljc4LDkuNzZoLjM2bDEuNC03LjM1aDIwLjc5Wm0tMzUuMy0xN2MxMywwLDE5LjUyLTExLjI2LDIwLjkyLTE4LDEuNS04LjM5LTIuNTEtMTcuNzYtMTQuNDEtMTcuNzZhMjEuODMsMjEuODMsMCwwLDAtMjAuNzMsMThjLTEuMTQsNi41MSwxLjUsMTcuNzcsMTQuMjUsMTcuNzdabTEwMC43Ny01My4xN2gtMTNsMy44Ny0yMC43OUgyMjQuMjhsLTEuNTMsOGMtMS42Myw5LjExLTcuMzUsMTEuODctMTUsMTIuNzVoLS4yNmwtMywxNS45MUgyMTVsLTEwLjE5LDU0LjI3aDIwLjkzbDEwLTU0LjE3aDEzLjM3Wm04OC4yNC0yNy4zOWgyMC44OGwtNi41LDM0Ljc4SDM1NWEyMS45MSwyMS45MSwwLDAsMSwxOS43NS05Ljc2YzYuNTEsMCwxNC4yOCwyLjUsMTcuOCw3Ljg3LDQuNDksNi45LDQsMTMsMS42MiwyNS41NEwzODcsMjIzLjI3SDM2Ni4wOGw3LTM4LjE3Yy42NS0zLjI1LDIuNjQtMTQuNzctOC40OS0xNC43Ny0xMS43OCwwLTEzLjc2LDEwLjUxLTE0LjQyLDE0TDM0MywyMjMuMTRIMzIyLjQxWiIvPjwvZz48L2c+PC9zdmc+"
                />
              </a>
              <a
                href="https://www.benzinga.com/pressreleases/23/03/ab31290363/atlanta-based-startup-gymnet-is-revolutionizing-the-fitness-industry-with-their-innovative-new-wo
 "
                target="_Blank"
                rel="nofollow"
              >
                <img
                  alt="Featured on Benzinga"
                  className="brandpush-news-logo"
                  style={{ maxWidth: 125 }}
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMiIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDcwLjggNjQuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cjx0aXRsZT5CZW56aW5nYSBMb2dvX3BpdGNoZGVjazwvdGl0bGU+Cjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iNjcuNyw2My44IDExMi45LDYzLjggMTEyLjksNTEuOSA4MS40LDUxLjkgODEuNCwzNy4zIDEwNy41LDM3LjMgMTA3LjUsMjUuNCA4MS40LDI1LjQgODEuNCwxMS45IAoJMTEzLjEsMTEuOSAxMTMuMSwwIDY3LjcsMCAiLz4KPHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIxNjcuMyw0MC4yIDEzNy43LDAgMTE3LjMsMCAxMjMuNyw4LjEgMTIzLjcsNjQuMSAxMzcuMyw2NC4xIDEzNy4zLDIyLjEgMTY3LjksNjMuOCAxODEsNjMuOCAxODEsMCAKCTE2Ny4zLDAgIi8+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik00Ny4xLDMxYzYtMS4xLDExLTYuNywxMS0xNC42QzU4LjEsNy45LDUxLjksMCwzOS42LDBIMGw2LjIsNy45djU2SDQxYzEyLjMsMCwxOC43LTcuNywxOC43LTE3LjMKCUM1OS40LDM4LjcsNTQsMzEuOSw0Ny4xLDMxeiBNMTkuOCwxMmgxNy4xYzQuNiwwLDcuNSwyLjcsNy41LDYuN3MtMi45LDYuNy03LjUsNi43SDE5LjhWMTJ6IE0zNy41LDUySDE5LjhWMzcuM2gxNy43CgljNS4yLDAsOC4xLDMuMyw4LjEsNy4zQzQ1LjYsNDkuMiw0Mi41LDUxLjksMzcuNSw1MkwzNy41LDUyeiIvPgo8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMzgwLjgsNDAuMmg3LjF2Ny41Yy0zLjcsMy04LjMsNC43LTEzLjEsNC44Yy0xMS40LDAtMTkuNC04LjctMTkuNC0yMC40czguMS0yMC40LDE5LjQtMjAuNAoJYzUuOSwwLDExLjQsMy4xLDE0LjYsOC4xbDEwLjgtNkMzOTUuNiw2LjUsMzg3LjUsMCwzNzQuNywwYy0xOC4xLDAtMzMuMSwxMi41LTMzLjEsMzEuOXMxNC44LDMxLjksMzMuMSwzMS45CgljMTAsMC4yLDE5LjUtNC4xLDI2LjEtMTEuNVYyOC43aC0yOS4yTDM4MC44LDQwLjJ6Ii8+Cjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMzE5LjMsNDAuMiAyODkuNiwwIDI2OS4zLDAgMjc1LjYsOC4xIDI3NS42LDY0LjEgMjg5LjMsNjQuMSAyODkuMywyMi4xIDMxOS45LDYzLjggMzMyLjksNjMuOCAKCTMzMi45LDAgMzE5LjMsMCAiLz4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTQ0NiwwaC0yNi4zbDYuMyw4LjFsLTEuMSwzLjFsLTIwLjQsNTIuOWgxNS40bDQtMTAuOGgyNy41bDQsMTAuOGgxNS40TDQ0NiwweiBNNDI3LjQsNDEuMmwxMC0yNy41bDEwLDI3LjUKCUg0MjcuNHoiLz4KPHJlY3QgeD0iMjQ3LjciIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSIxMy43IiBoZWlnaHQ9IjY0LjEiLz4KPHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIyMzYuOCwxMSAyMzYuOCwwIDE4OC43LDAgMTg4LjcsMTEuOSAyMTguOSwxMS45IDE4OC43LDUyLjkgMTg4LjcsNjMuOCAyMzcuMyw2My44IDIzNy4zLDUxLjkgCgkyMDYuNCw1MS45ICIvPgo8L3N2Zz4K"
                />
              </a>
            </div>
          </div>
          <div>
            <span
              className="brandpush-footer"
              style={{
                textAlign: "center",
                padding: "0 20px",
                fontSize: 13,
                fontFamily: "sans-serif",
                fontWeight: 600,
                letterSpacing: 3,
                position: "relative",
                width: "100%",
                margin: "0 0 8px 0",
                display: "inline-block",
                color: "#4A4A4A"
              }}
            >
              AND OVER 400 NEWS SITES
            </span>
            <div
              style={{
                color: "#4A4A4A",
                fontSize: 10,
                letterSpacing: 0,
                height: 15,
                margin: "3px 0 10px 0",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <img
                style={{ width: 12, margin: "0 3px 0 0" }}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMzMzMzMzO30NCjwvc3R5bGU+DQo8ZyBpZD0iWE1MSURfMV8iPg0KCTxwYXRoIGlkPSJYTUxJRF81XyIgY2xhc3M9InN0MCIgZD0iTTUwMS43LDIyNS43TDQ2NywxODMuMWMtNS41LTcuMS04LjctMTUtMTAuMi0yNC40bC02LjMtNTQuNGMtMi40LTIyLjEtMjAuNS00MC4yLTQyLjUtNDIuNQ0KCQlsLTU0LjQtNi4zYy05LjUtMC44LTE4LjEtNC43LTI1LjItMTAuMmwtNDIuNS0zNC43Yy0xNy4zLTE0LjItNDIuNS0xNC4yLTU5LjksMGwtNDIuNSwzNC43Yy03LjEsNS41LTE1LDguNy0yNC40LDEwLjJsLTU0LjQsNi4zDQoJCWMtMjIuMSwyLjQtNDAuMiwyMC41LTQyLjUsNDIuNWwtNi4zLDU0LjRjLTAuOCw5LjUtNC43LDE4LjEtMTAuMiwyNS4ybC0zNC43LDQyLjVjLTE0LjIsMTcuMy0xNC4yLDQyLjUsMCw1OS45bDM0LjcsNDIuNQ0KCQljNS41LDcuMSw4LjcsMTUsMTAuMiwyNC40bDYuMyw1NC40YzIuNCwyMi4xLDIwLjUsNDAuMiw0Mi41LDQyLjVsNTQuNCw2LjNjOS41LDAuOCwxOC4xLDQuNywyNS4yLDEwLjJsNDIuNSwzNC43DQoJCWMxNy4zLDE0LjIsNDIuNSwxNC4yLDU5LjksMGw0Mi41LTM0LjdjNy4xLTUuNSwxNS04LjcsMjQuNC0xMC4ybDU0LjQtNi4zYzIyLjEtMi40LDQwLjItMjAuNSw0Mi41LTQyLjVsNi4zLTU0LjQNCgkJYzAuOC05LjUsNC43LTE4LjEsMTAuMi0yNS4ybDM0LjctNDIuNUM1MTUuMSwyNjguMiw1MTUuMSwyNDMsNTAxLjcsMjI1Ljd6IE0yMDcuOSwzODRMOTYsMjcyLjFsNDgtNDhsNjMuOCw2My44TDM2Ny44LDEyOGw0OCw0OS42DQoJCUwyMDcuOSwzODR6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="
              />
              <span>
                Verified by{" "}
                <a
                  style={{ color: "#4A4A4A" }}
                  href="https://www.brandpush.co?utm_source=Client+Referral&utm_medium=Trust+Badge&utm_campaign=Trust+Badge&utm_content=1677701596175"
                  target="_Blank"
                >
                  BrandPush.co
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End of BrandPush Trust Badge */}
  </div>
</>



          <ul className={css.sections}>
            <li className={css.section}>
              <div className={css.sectionContentFirstChild}>
                <SectionLocations />
              </div>
            </li>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionHowItWorks
                  currentUserListing={currentUserListing}
                  currentUserListingFetched={currentUserListingFetched}
                />
              </div>
            </li>
          </ul>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

LandingPageComponent.defaultProps = {
  currentUserListing: null,
  currentUserListingFetched: false,
};

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUserListing, currentUserListingFetched } = state.user;

  return {
    scrollingDisabled: isScrollingDisabled(state),
    currentUserListing,
    currentUserListingFetched,
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);

export default LandingPage;
