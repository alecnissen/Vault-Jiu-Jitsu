import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import coldPlungeImg from "../assets/20230424-EA0A3551_edited.webp";
import coldPlungeImg from "../assets/vault-cold-plunge-img.webp";
import saunaImg from "../assets/vault-sauna-img.jpg";

export default function RecoveryRoom() {
  return (
    <div className="recovery-room-content-wrapper">
      <h1>Our Recovery Room</h1>

      <p className="recovery-room-text">
        Here at the Vault Jiu-Jitsu we offer a recovery room which includes an
        cold plunge, sauna, red-light therapy, and Normatech compression
        therapy. Click the learn more button to discover the incredible benefits
        of these high tech modalities!!!
      </p>

      <div className="recovery-cards-container">
        <div className="card-group-1">
          <Card className="card-container">
            <Card.Img variant="top" src={coldPlungeImg} className="cold-plunge-img"/>
            <Card.Body>
              <Card.Title>Cold Plunge</Card.Title>
              <Card.Text>
                A cold plunge, also known as cold water immersion, involves
                submerging the body in cold water for a short duration,
                typically in a cold pool or icy bath. This practice is believed
                to offer numerous health benefits, including reducing
                inflammation, boosting circulation, improving muscle recovery,
                enhancing mood, and strengthening the immune system. Cold
                plunges are often favored by athletes and individuals seeking a
                refreshing way to invigorate the body and promote overall
                well-being.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>

          <Card className="card-container">
            <Card.Img variant="top" src={saunaImg} className="card-img sauna-img" />
            <Card.Body>
              <Card.Title>Sauna</Card.Title>
              <Card.Text>
                A sauna is a heated room or small house designed for
                experiencing dry or wet heat sessions, typically through steam
                or infrared technology. The practice of using a sauna is known
                as "sauna bathing" and is renowned for its potential health
                benefits, including promoting relaxation, relieving stress,
                detoxifying the body through sweating, improving cardiovascular
                health, and soothing sore muscles. Saunas have been used for
                centuries in various cultures as a means of purifying the body
                and rejuvenating the mind.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="card-group-2">
          <Card className="card-container">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Red Light Therapy</Card.Title>
              <Card.Text>
                Red light therapy, also known as photobiomodulation (PBM),
                utilizes specific wavelengths of red and near-infrared light to
                stimulate cellular function in the body. It is believed to
                promote skin health, reduce inflammation, alleviate pain,
                accelerate wound healing, improve circulation, and boost mood.
                This non-invasive treatment is gaining popularity for its
                potential benefits in enhancing overall well-being and
                addressing various health concerns.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>

          <Card className="card-container">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Normatech Compression Therapy</Card.Title>
              <Card.Text>
                NormaTec compression therapy utilizes dynamic pneumatic
                compression to enhance circulation and promote recovery in the
                muscles and limbs. By applying intermittent pressure to the
                limbs, it helps to reduce inflammation, alleviate muscle
                soreness, and enhance recovery after intense physical activity
                or injury. This therapy is popular among athletes and
                individuals seeking to optimize their recovery process and
                improve overall performance.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
