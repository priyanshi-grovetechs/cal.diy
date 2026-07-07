"use client";

import type { EmbedProps } from "app/WithEmbedSSR";
import { useSearchParams } from "next/navigation";

import { BookerWebWrapper as Booker } from "@calcom/web/modules/bookings/components/BookerWebWrapper";
import { getBookerWrapperClasses } from "@calcom/features/bookings/Booker/utils/getBookerWrapperClasses";

import type { inferSSRProps } from "@lib/types/inferSSRProps";

import BookingPageErrorBoundary from "@components/error/BookingPageErrorBoundary";

import type { getServerSideProps } from "@server/lib/[user]/[type]/getServerSideProps";

export type PageProps = inferSSRProps<typeof getServerSideProps> & EmbedProps;

export const getMultipleDurationValue = (
  multipleDurationConfig: number[] | undefined,
  queryDuration: string | string[] | null | undefined,
  defaultValue: number
) => {
  if (!multipleDurationConfig) return null;
  if (multipleDurationConfig.includes(Number(queryDuration))) return Number(queryDuration);
  return defaultValue;
};

function Type({ slug, user, isEmbed, booking, isBrandingHidden, eventData, orgBannerUrl }: PageProps) {
  const searchParams = useSearchParams();

  return (
    <BookingPageErrorBoundary>
      {!isEmbed && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: "#0b1f4a",
            padding: "0 24px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(11,31,74,0.4)",
          }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/msxpo-logo.png" alt="MSxpo" style={{ height: "36px", width: "auto" }} />
        </div>
      )}
      <main className={getBookerWrapperClasses({ isEmbed: !!isEmbed })} style={!isEmbed ? { paddingTop: "60px", backgroundColor: "#F0F4FF", minHeight: "100dvh" } : undefined}>
        <Booker
          username={user}
          eventSlug={slug}
          bookingData={booking}
          hideBranding={isBrandingHidden}
          eventData={eventData}
          entity={{ ...eventData.entity, eventTypeId: eventData?.id }}
          durationConfig={eventData.metadata?.multipleDuration}
          orgBannerUrl={orgBannerUrl}
          /* TODO: Currently unused, evaluate it is needed-
           *       Possible alternative approach is to have onDurationChange.
           */
          duration={getMultipleDurationValue(
            eventData.metadata?.multipleDuration,
            searchParams?.get("duration"),
            eventData.length
          )}
        />
      </main>
    </BookingPageErrorBoundary>
  );
}

export default Type;
