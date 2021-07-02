import React from "react"
import { BorderWrapper, ApplyWrapper, ApplyButton } from "./styles"
export function Apply() {
	return (
		<BorderWrapper>
			<ApplyWrapper>
				<div id="first">
					<span>tl;dr</span>
					<h4>
						A course to get started on Thinking Through Financial Planning.
					</h4>
				</div>
				<div id="second">
					<span>Already learning</span> <br />
					<h4>224 people</h4>
				</div>
				<div id="third">
					<span>Life-time Access</span> <br />
					<h4>Rs. 1499/- </h4>
				</div>
				<div id="button">
					<a
						href="https://www.instamojo.com/@AggyAbhishek/l141f83f9226c47549fa38b651e0641b7/"
						target="_blank"
						rel="noreferrer"
					>
						<ApplyButton className="buy-button">
							<h3>
								Get the course{"  "}
								<span role="img" aria-label="rocket">
									🚀
								</span>
							</h3>
						</ApplyButton>
					</a>
				</div>
			</ApplyWrapper>
		</BorderWrapper>
	)
}
