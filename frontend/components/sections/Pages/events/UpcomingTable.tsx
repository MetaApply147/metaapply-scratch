"use client";

import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";

type Props = {
  events: any[];
  loading: boolean;
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const UpcomingTable = ({ events, loading }: Props) => {
  return (
    <Section spacing="lg">
      {/* Heading */}
      <SectionHeader title="Explore" highlight="Abroad Education" />

      {/* Table Wrapper */}
      <Box sx={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #C0C0C0",
          }}
        >
          {/* Header */}
          <thead style={{ backgroundColor: "#222466", color: "#fff" }}>
            <tr>
              <th style={thStyle}>Event</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Location</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Registration Link</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {loading ? (
                <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                    <Typography variant="body05">Loading...</Typography>
                </td>
                </tr>
            ) : events.length === 0 ? (
                <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                    <Typography variant="body05">Coming Soon</Typography>
                </td>
                </tr>
            ) : (
                events.map((event) => (
                <tr key={event.id}>
                    <td style={tdStyle}>{event.eventTitle}</td>
                    <td style={tdStyle}>{formatDate(event.eventDate)}</td>
                    <td style={tdStyle}>{event.eventLocation}</td>
                    <td style={tdStyle}>{event.eventDuration}</td>
                    <td style={tdStyle}>
                    {event.eventRegistrationDetails === "Walk-In" ? (
                        <Typography variant="body05">Walk-In</Typography>
                    ) : (
                        <span
                        style={{ color: "#FF3185" }}
                        dangerouslySetInnerHTML={{
                            __html: event.eventRegistrationDetails,
                        }}
                        />
                    )}
                    </td>
                </tr>
                ))
            )}
            </tbody>
        </table>
      </Box>
    </Section>
  );
};

export default UpcomingTable;

//  Styles (kept separate for cleanliness)
const thStyle: React.CSSProperties = {
  padding: "14px",
  textAlign: "left",
  border: "1px solid #C0C0C0",
  fontWeight: 700,
  fontFamily: 'var(--font-body)',
  fontSize: '18px'
};

const tdStyle: React.CSSProperties = {
  padding: "14px",
  border: "1px solid #C0C0C0",
  fontFamily: 'var(--font-body)',
};