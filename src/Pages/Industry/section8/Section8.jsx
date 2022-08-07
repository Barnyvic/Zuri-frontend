import React from 'react'
import './Section8.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from "@mui/icons-material/Add";
import TwitterIcon from '@mui/icons-material/Twitter';
import wire8 from '../../../Components/Assets/svg/section7wire.svg'

const Section8 = () => {
  return (
    <section>
      <hr />
      <div className="container accordion">
        <div className="wire-container">
          <img src={wire8} alt="" />
        </div>
        <div className="title-container">
          <span>Got Questions?</span>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="accordion-container">
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Would I have to pay to enroll for the training?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No, the program is completely free thanks to Ingressive For Good
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                What are the things I would need to participate?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You'll need a laptop, internet connection and the willingness to
                learn through collaboration and mentorship.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                What happens if i join and I’m not active?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Participants who join the program and stop engaging will be
                given the chance to catch up. You'll also be assigned a
                'study-mate' and mentor to help you. However, there is the
                possibility of not being promoted to the next stage if you
                remain inactive for too long
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Can I switch from the part-time track to full-time and vice
                versa?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Unfortunately, no, you cannot switch from part-time to full-time
                and vice-versa
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Will I get paid?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We reward some participants who complete tasks early, however,
                this is not a weekly reward. All the work that will be done
                during the program are hypothetical.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="title-container1">
          <div className="fi">
            <p>Still got questions?</p>
            <div className="button">
              <button href="/#">
                <TwitterIcon />
                Tweet them at us
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}

export default Section8