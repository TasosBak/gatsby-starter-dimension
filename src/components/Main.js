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
          <h2 className="major">Ψηφιοποίηση επιχείρησης</h2>

          <h3>Τι μπορει να προσφερει μια ιστοσελιδα στην επιχειρηση σας;</h3>
          <h5>Μια συγχρονη ιστοσελιδα, δειχνει μια συγχρονη επιχειρηση!</h5>
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
            εχοντας ιστοσελιδα, αυξανεται η αξιοπιστια και το image της
            εταιρειας σας
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
          <h2 className="major">Ψηφιοποιηση επιχειρησης</h2>
          <h3>Τι μπορει να προσφερει μια ιστοσελιδα στην επιχειρηση σας;</h3>

          <h4>Προσθετει εξτρα κυρος και αξιοπιστια.</h4>
          <p>
            Είναι γεγονός ότι βιώνουμε μια εποχή ψηφιοποίησης κι ότι όλες οι
            διαδικασίες που δεν προαπαιτούν φυσική παρουσία τείνουν να
            ψηφιοποιηθούν. Όλοι οι πελάτες πριν αγοράσουν κάτι, είτε φυσικάείτε
            διαδικτυακά, κάνουν έρευνα αγοράς στο διαδίκτυο. Μια επιχείρηση που
            δεν έχει ιστοσελίδα έχει μειονεκτική θέση σεμια αντίστοιχη
            ανταγωνιστική. Δεν υπάρχει αμεσότητα και επικοινωνία με τον πελάτη
            όλο το 24ωρο. Κάνε τώρα ένα βήμα πιο κοντά στην τεχνολογία, πρόλαβε
            τους ανταγωνιστές σου, εδραιώσου τώρα σε αυτό το νέο - ψηφιακό
            περιβάλλον.
          </p>

          <h4>24ωρη παρουσια της επιχειρησης σας στον διαδικτυακο κοσμο.</h4>
          <p>
            Το διαδίκτυο δεν έχει ωράριο. Ειστε “ανοιχτά” όλο το 24ωρο και οι
            πελάτες σας μπορούν να σας επισκέπτονται ανά πάσα ώρα και στιγμή
            είτε για να ενημερωθούν σχετικά με τις υπηρεσίες και τα προιόντα
            σας, είτε για να αγοράσουν κάτι, είτε για να κλείσουν ραντεβού.
            Φοβερό; Η μόνιμη παρουσία εξασφαλίζει σίγουρα περισσότερους πελάτες.
          </p>

          <h4>
            Επεκταση αναγνωρισιμοτητας της επιχειρησης σας περαν της τοπικης
            αγορας.
          </h4>
          <p>
            Ανεξάρτητα από τα προιόντα και τις υπηρεσίες που παρέχετε,
            εισχωρώντας στον χώρο του διαδικτύου, καλείστε να δεχθείτε σταδιακά
            μια μεγάλη αύξηση νέων πελατών. Γιατι; Επειδή, εφόσον δημιουργήσετε
            κάποια ιστοσελίδα για την επιχείρησή σας, θα μπορείτε να
            διαφημίζεστε σε όποιο μέρος, χώρα, ήπειρο θελετε και να επιλέγετε
            εσείς το κοινό!
          </p>

          <h4>24ωρη διαφημιση ακομη και με μηδενικο κοστος.</h4>
          <p>
            Με την βοήθεια των social media, με τις μηχανές αναζήτησης και με
            άλλους πολλούς τρόπους μπορείτε να διαφημίζετε όλη την ημέρα τα
            προιόντα, τις υπηρεσίες σας, τις δραστηριότητες, τα νέα της
            εταιρείας σας και ότι άλλο θέλετε να μοιραστείτε με τους πελάτες σας
            χωρίς να χρειάζεστε τα αυξημένα κόστη διαφήμισης
          </p>

          <h4>Αμεση επαφη με δυνητικους πελατες.</h4>
          <p>
            Δημιουργήστε την ανάγκη για τα προϊόντα ή της υπηρεσίες σας στο
            κοινό. Ένα όμορφο και έυκολο site προτρέπει τον χρήστη να αγοράσει
            ακόμη κι αν δεν χρειάζεται! Το διαδίκτυο θα σας αποφέρει μεγάλα
            απροσδιόκητα κέρδη.
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
          <h2 className="major">Υπηρεσιες</h2>
          <h3>Οι Web Riders σας παρεχουν υπηρεσιες πανω στην:</h3>
          <p>
            <ul>
              <li>Σχεδίαση ιστοσελιδών / eshop</li>
              <li>Κατασκευή ιστοσελιδών / eshop</li>
              <li>Δημιουργία διαφημιστών καμπανιών</li>
              <li>Διαχείριση Social Media</li>
              <li>
                Ανάλυση επισκεψιμότητας και καταγραφη στατιστικών ιστοχώρων
              </li>
              <li>Διαχείριση εμπορεύματος / Καταχώρηση προϊόντων</li>
            </ul>
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
