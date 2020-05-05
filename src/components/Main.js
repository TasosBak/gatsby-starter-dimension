import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>

          <h3>
            Γιατί να φτιάξω επαγγελματική ιστοσελίδα? Τι κερδίζω φτιάχνοντας
            ιστοσελίδα?
          </h3>
          <h5>Μια σύγχρονη ιστοσελίδα, δείχνει μια σύγχρονη επιχείρηση!</h5>
          <p>
            Η επιχείρησή σας, η εταιρεία σας, δε θα πρέπει να είναι μόνο
            σύγχρονη, θα πρέπει να δείχνει και σύγχρονη! Στην εποχή που το
            internet είναι ηγέτης στην επικοινωνία και στην προώθηση – διαφήμιση
            προϊόντων και υπηρεσιών και μικροί μεγάλοι έχουν διαρκή ενασχόληση
            με αυτό, είτε για λόγους εργασίας, είτε για λόγους ψυχαγωγίας, εσείς
            και η επιχείρησή σας, μπορείτε να απέχετε από αυτό? Φτιάχνοντας μια
            ιστοσελίδα, έχει τη θέση της και η επιχείρησή σας στη μεγάλη αγορά
            του διαδικτύου.
          </p>
          <h5>
            Έχοντας ιστοσελίδα, αυξάνεται η αξιοπιστία και το image της
            εταιρείας σας
          </h5>
          <p>
            Πόσοι πελάτες εμπιστεύονται πια επιχειρήσεις που δεν έχουν
            διαδικτυακή παρουσία, όταν εκατομμύρια χρήστες του internet κάθε
            λεπτό, αναζητούν και μια υπηρεσία ή ένα προϊόν στο διαδίκτυο? Γιατί
            να μη δουν και την εταιρεία σας μέσα σε αυτήν τη μεγάλη αγορά? Γιατί
            να μη γνωρίζουν την επιχείρησή σας μέσα από την ιστοσελίδα σας?
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <h3>
            Γιατί να φτιάξω επαγγελματική ιστοσελίδα? Τι κερδίζω φτιάχνοντας
            ιστοσελίδα?
          </h3>
          <h5>H κατασκευή της ιστοσελίδας φέρνει κέρδη!</h5>
          <p>
            Γιατί να μην αγοράσουν τις δικά σας προϊόντα και τις δικές σας
            υπηρεσίες στο διαδίκτυο? Γιατί να μην αυξήσετε τις πωλήσεις και τα
            κέρδη σας? Χιλιάδες πελάτες σας περιμένουν στο web.
          </p>
          <h5>Ανοιχτή επιχείρηση 24 ώρες τη μέρα κάθε μέρα χωρίς έξοδα!</h5>
          <p>
            Τέρμα τα ωράρια και οι μισθοί! Με μια ιστοσελίδα είσαστε διαρκώς
            ανοιχτά σε όλους τους ιντερνετικούς χρήστες, που επισκέπτονται την
            επιχείρησή σας κάθε στιγμή, γνωρίζουν τις υπηρεσίες σας και τα
            προϊόντα σας, χωρίς να χρειάζεται να πληρώνετε υπαλλήλους και έξοδα.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <h3>
            Στην κατασκευή ιστοσελίδας χρειάζεστε έμπειρους, αξιόπιστους
            επαγγελματίες
          </h3>
          <p>
            Χρειάζεστε τους ανθρώπους της WebRiders που να μην έχουν μόνο
            τεχνικές γνώσεις, αλλά να ξέρουν την αγορά και τον παλμό των
            χρηστών, ώστε η ιστοσελίδα σας να αποτελεί για την εταιρεία σας, το
            πιο δυνατό εργαλείο web Marketing. Σας βοηθάμε να εκμεταλλευτείτε το
            διαδίκτυο σωστά! Αξιοποιούμε δυναμικά κάθε νέα τεχνολογία για τη
            σωστή επιχειρηματική προβολή σας! Ενισχύστε το επιχειρηματικό σας
            προφίλ, εξασφαλίστε το μέλλον της επιχείρησής σας, αποκτώντας ένα
            δυναμικό website. Κατασκευάζουμε σύγχρονες δυναμικές ιστοσελίδες με
            σύστημα διαχείρισης περιεχομένου CMS που φέρνουν εντυπωσιακό
            αποτέλεσμα, είναι απόλυτα φιλικές και λειτουργικές στους επισκέπτες
            σας και επιτρέπουν την προσθήκη και ανανέωση της ιστοσελίδας με
            απλές ενέργειες από τον ίδιο τον ιδιοκτήτη της ιστοσελίδας χωρίς να
            χρειάζεται να έχει τεχνικές γνώσεις.
          </p>
          <p>
            Προσφέρουμε συμβουλευτικές υπηρεσίες διαδικτύου με σκοπό να
            ενημερωθείτε για οτιδήποτε σχετικό με την ιστοσελίδα που θέλετε να
            κατασκευάσετε ή με την ιστοσελίδα που ήδη διαθέτετε. Συζητήστε μαζί
            μας για τις προοπτικές που υπάρχουν για τη δική σας επιχείρηση στο
            χώρο του διαδικτύου. Φροντίζουμε να ξεχωρίσει η επιχείρησή σας!
            Φροντίζουμε να ξεχωρίσει η ιστοσελίδα σας!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
