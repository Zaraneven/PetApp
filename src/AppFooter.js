import React from 'react';

const AppFooter = () => {
    return (
<footer className="footer-distributed">

			<div className="footer-left">

				<h3>Team<span>Una</span></h3>

				<p className="footer-links">
					<a href="_#">Home</a>
					·
					<a href="_#">About</a>
					·
					<a href="_#">Faq</a>
					·
					<a href="_#">Contact</a>
				</p>

				<p className="footer-company-name">Paragon © 2020</p>

				<div className="footer-icons">

					<a href="_#"><i className="fa fa-facebook"></i></a>
					<a href="_#"><i className="fa fa-twitter"></i></a>
					<a href="_#"><i className="fa fa-linkedin"></i></a>
					<a href="_#"><i className="fa fa-github"></i></a>

				</div>

			</div>

			<div className="footer-right">

				<p>Contact Us</p>

				<form action="#" method="post">

					<input type="text" name="email" placeholder="Email"></input>
					<textarea name="message" placeholder="Message"></textarea>
					<button>Send</button>

				</form>

			</div>

		</footer>
    )

}

export default AppFooter;