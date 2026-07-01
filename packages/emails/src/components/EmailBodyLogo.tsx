import RawHtml from "./RawHtml";
import Row from "./Row";

const CommentIE = ({ html = "" }) => <RawHtml html={`<!--[if mso | IE]>${html}<![endif]-->`} />;

const EmailBodyLogo = () => {
  return (
    <>
      <CommentIE
        html={`</td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"></td>`}
      />
      <div style={{ margin: "0px auto", maxWidth: 600 }}>
        <Row align="center" border="0" style={{ width: "100%" }}>
          <td
            style={{
              direction: "ltr",
              fontSize: "0px",
              padding: "0px",
              textAlign: "center",
            }}>
            <CommentIE
              html={`<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" >`}
            />
            <div
              style={{
                fontSize: "0px",
                textAlign: "center",
                direction: "ltr",
                display: "inline-block",
                verticalAlign: "top",
                width: "100%",
              }}>
              <Row border="0" style={{ verticalAlign: "top" }} width="100%">
                <td
                  align="center"
                  style={{
                    fontSize: "0px",
                    padding: "10px 25px",
                    paddingTop: "24px",
                    paddingBottom: "32px",
                    wordBreak: "break-word",
                  }}>
                  <div
                    style={{
                      fontFamily: "Roboto, Helvetica, sans-serif",
                      fontSize: "13px",
                      color: "#9CA3AF",
                      lineHeight: "20px",
                    }}>
                    Powered by{" "}
                    <span style={{ color: "#4F46E5", fontWeight: 700 }}>MSxpo</span>
                    {" · Virtual Event Platform"}
                  </div>
                </td>
              </Row>
            </div>
            <CommentIE html="</td></tr></table>" />
          </td>
        </Row>
      </div>
    </>
  );
};

export default EmailBodyLogo;
