import React from "react";
import "./styles.scss";
import  { Container, Link, Typography, Box } from "@mui/material";
import { helpLocales as h} from "./helpLocales";

const HelpPage = ():JSX.Element => {
    return (
        <Container id="help-page">
            <h1 className="page-title">{h.pageTitle}</h1>
            <Box>
                <Typography>
                    {h.descText[0]}
                    <Link href="https://munzee.zendesk.com/hc/en-us/sections/360006545412-Munzee-Events">{h.guideLink}</Link>
                    {h.descText[1]}
                </Typography>
            </Box>
            <Box>
                <h2>{h.eventsPlaceTitle}</h2>
                <Typography>{h.eventsPlaceText[0]}</Typography>
                <Typography>{h.eventsPlaceText[1]}</Typography>
            </Box>
            <Box>
                <h2>{h.addEventTitle}</h2>
                <Typography>
                    {h.addEventText[0]}
                    <Link href="https://calendar.munzee.com/submit">{h.addEventText[1]}</Link>
                    {h.addEventText[2]}
                    {h.addEventText[3]}
                    <Link href="https://munzee.zendesk.com/hc/en-us/articles/360033547011-How-to-Create-an-Event-">{h.addEventText[4]}</Link>
                    {h.addEventText[5]}
                    <Link href="https://munzee.zendesk.com/hc/en-us/articles/360033186272-How-to-Purchase-an-Event-Package-">{h.addEventText[6]}</Link>
                    {h.addEventText[7]}
                </Typography>
            </Box>
            <Box>
                <h2>{h.packageOptionsTitle}</h2>
                <Typography>
                    {h.packageOptionsText[0]}
                    <Link href="https://munzee.zendesk.com/hc/en-us/articles/360033186272-How-to-Purchase-an-Event-Package-">{h.packageOptionsText[1]}</Link>
                    {h.packageOptionsText[2]}
                </Typography>
                <Typography>
                    {h.packageOptionsListTitle}
                </Typography>
                <ul>
                    <li>{h.packageOptionsListItems[0]}</li>
                    <li>{h.packageOptionsListItems[1]}</li>
                    <li>{h.packageOptionsListItems[2]}</li>
                    <li>{h.packageOptionsListItems[3]}</li>
                    <li>{h.packageOptionsListItems[4]}</li>
                    <li>{h.packageOptionsListItems[5]}</li>
                </ul>
                <Typography>
                    {h.packageOptionsText2[0]}
                    <Link href="https://www.eventzeeapp.com/">{h.packageOptionsText2[1]}</Link>
                    {h.packageOptionsText2[2]}
                    <Link href="https://store.freezetag.com/collections/event-packages">{h.packageOptionsText2[3]}</Link>
                    {h.packageOptionsText2[4]}
                </Typography>
            </Box>
            <Box>
                <h2>{h.indicatorPinsTitle}</h2>
                <Typography>{h.indicatorPinsText[0]}</Typography>
                <Typography>
                    {h.indicatorPinsText[1]}
                    <Link href="https://www.munzee.com/m/EventIndicator/">{h.indicatorPinsText[2]}</Link>
                    {h.indicatorPinsText[3]}
                </Typography>
            </Box>
            <Box>
                <h2>{h.liveTimeTitle}</h2>
                <Typography>{h.liveTimeText[0]}</Typography>
                <Typography>{h.liveTimeText[1]}</Typography>
                <Typography>
                    <span>
                        {h.liveTimeText[2]}
                        <Link href="https://www.timeanddate.com/worldclock/usa/mckinney">{h.liveTimeText[3]}</Link>
                        {h.liveTimeText[4]}
                    </span>
                </Typography>
            </Box>
            <Box>
                <h2>{h.munzeePrizeTitle}</h2>
                <Typography>{h.munzeePrizeText}</Typography>
            </Box>
            <Box>
                <h2>{h.genericEventTitle}</h2>
                <Typography>{h.genericEventText[0]}</Typography>
                <Typography>{h.genericEventText[1]}</Typography>
            </Box>
            <Box>
                <h2>{h.otherBadgesTitle}</h2>
                <Typography>{h.otherBadgesText}</Typography>
            </Box>
        </Container>
    )
}

export default HelpPage;