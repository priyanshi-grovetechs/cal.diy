import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Badge } from "@calcom/ui/components/badge";
import { CheckIcon } from "@coss/ui/icons";

export interface BookingSuccessCardProps {
  title: string;
  formattedDate: string;
  formattedTime: string;
  endTime: string;
  formattedTimeZone: string;
  hostName: string | null;
  hostEmail: string | null;
  attendeeName: string | null;
  attendeeEmail: string | null;
  location: string | null;
}

export function BookingSuccessCard({
  title,
  formattedDate,
  formattedTime,
  endTime,
  formattedTimeZone,
  hostName,
  hostEmail,
  attendeeName,
  attendeeEmail,
  location,
}: BookingSuccessCardProps) {
  const { t } = useLocale();

  return (
    <div className="h-screen">
      <main className="mx-auto max-w-3xl">
        <div className="overflow-y-auto">
          <div className="flex items-end justify-center px-4 pb-20 pt-4 text-center sm:flex sm:p-0">
            <div className="main inset-0 my-4 flex flex-col transition-opacity sm:my-0" aria-hidden="true">
              <div
                className="bg-default dark:bg-cal-muted border-booker border-booker-width inline-block transform overflow-hidden rounded-lg pb-4 pt-0 text-left align-bottom transition-all sm:my-8 sm:w-full sm:max-w-xl sm:pb-8 sm:align-middle"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline">
                <div
                  style={{
                    background: "#0b1f4a",
                    padding: "20px 32px",
                    marginBottom: "24px",
                  }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.2)",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                      <CheckIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "16px", lineHeight: "1.2" }}>
                        MSxpo
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/msxpo-logo.png" alt="MSxpo" style={{ height: "16px", width: "auto" }} />
                    </div>
                  </div>
                </div>
                <div className="px-8">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <CheckIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="mb-8 mt-6 text-center last:mb-0">
                    <h3 className="text-emphasis text-2xl font-semibold leading-6" id="modal-headline">
                      Your Booth Meeting is Confirmed!
                    </h3>
                    <div className="mt-3">
                      <p className="text-default">A confirmation has been sent to your email address.</p>
                    </div>
                    <div className="border-subtle text-default mt-8 grid grid-cols-3 gap-x-4 border-t pt-8 text-left rtl:text-right sm:gap-x-0">
                      <div className="font-medium">{t("what")}</div>
                      <div className="col-span-2 mb-6 last:mb-0">{title}</div>
                      {formattedDate && (
                        <>
                          <div className="font-medium">{t("when")}</div>
                          <div className="col-span-2 mb-6 last:mb-0">
                            {formattedDate}
                            {formattedTime && (
                              <>
                                <br />
                                {formattedTime}
                                {endTime && ` - ${endTime}`}
                                {formattedTimeZone && (
                                  <span className="text-bookinglight"> ({formattedTimeZone})</span>
                                )}
                              </>
                            )}
                          </div>
                        </>
                      )}
                      <div className="font-medium">{t("who")}</div>
                      <div className="col-span-2 last:mb-0">
                        {hostName && (
                          <div className="mb-3">
                            <div>
                              <span className="mr-2">{hostName}</span>
                              <Badge variant="blue">{t("Host")}</Badge>
                            </div>
                            {hostEmail && <p className="text-default">{hostEmail}</p>}
                          </div>
                        )}
                        {attendeeName && (
                          <div className="mb-3 last:mb-0">
                            <p>{attendeeName}</p>
                            {attendeeEmail && <p>{attendeeEmail}</p>}
                          </div>
                        )}
                      </div>
                      {location && (
                        <>
                          <div className="mt-3 font-medium">{t("where")}</div>
                          <div className="col-span-2 mt-3">{t("web_conferencing_details_to_follow")}</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
