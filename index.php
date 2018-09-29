<?php
	/*Php loaders and config*/
	include('../../../config.php');
	include('../../../configLoaders.php');

	$email='notset';
	$refno='notset';
	$premium='notset';

	if(isset($_GET["email"]) && $_GET["email"]!=""){
		$email=$_GET["email"];
		$email = filter_var( $email, FILTER_SANITIZE_EMAIL);
	}
	if(isset($_GET["refno"]) && $_GET["refno"]!=""){
		$refno=$_GET["refno"];
		$refno = filter_var( $refno, FILTER_SANITIZE_ENCODED);
	}
	if(isset($_GET["premium"]) && $_GET["premium"]!=""){
		$premium=$_GET["premium"];
		$premium = filter_var( $premium, FILTER_SANITIZE_NUMBER_INT);
	}
?>

<!DOCTYPE html>
<html lang="en">

	<?php headElements(); ?>
	<script src="https://cdn.paddle.com/paddle/paddle.js"></script>
	<script type="text/javascript">
		Paddle.Setup({
			vendor: 31841,
			debug: true
		});
	</script>
	<body>
		<script>$(document).ready(function($){ scripts(); });</script>

		<?php topNav(); ?>
		<script type="text/javascript">
			document.getElementByClass('paddle_button').addEventListener('click', function() {
				alert('clicked')
				Paddle.Checkout.open({
					product: 530613,
			    email: "<?php echo $email; ?>",
			    passthrough: '{guid:"<?php echo $refno; ?>"}',
			    successCallback: function(data) { console.log(data); },
			    closeCallback: function(data) { console.log(data); }
				}, false);
			});
		</script>
		<div >

			<div id="post-title" >
				<h3 style="text-align:center;font-weight: bold;text-align:center;width:100%;">That's it! Your listing has been saved!</h3>
			</div>

			<?php

				if($email!='notset' && $refno!='notset'){
					if($premium!=='notset' && $premium=='1'){
						?>
						<div class="post-from-holder" style="height:100vh;text-align:center;" >
							 <h4>Please pay below and we'll set your premium posting live immediately!</h4>
							<a
								href="#!"
								class="paddle_button"
								data-product="530613"
								data-passthrough='{"guid":"<?php echo $refno; ?>"}'
								data-email="<?php echo $email; ?>"
							>Pay</a>
							<br /><br />

							If not, we'll review your listing as a free lising within 24 hours, and you'll be notified you once approved and live.

							<div style="margin-top:15px;">
								<a href="/" style="font-weight:bold;">Go back to home</a>
							</div>

						</div>
						<?php
					} else if($premium==='notset'){
						?>
						<div class="post-from-holder" style="height:100vh;text-align:center;" >
							We'll review your listing and approve it within the next 24 hours. You'll receive an email once it's live.

							<br /><br />

							You have one last chance to convert your listing to a premium listing though! This will make it live <b>immediately</b>, highlight it, and always display it above all free listings.

							<br /><br />

							<a
								href="#!"
								class="paddle_button"
								data-product="530613"
								data-passthrough='{"guid":"<?php echo $refno; ?>"}'
								data-email="<?php echo $email; ?>"
							>Convert to Premium now!</a>

							<div style="margin-top:15px;">
								<a href="/" style="font-weight:bold;">Go back to home</a>
							</div>

						</div>
						<?php
					}
				} else {
					?>
					<div class="post-from-holder" style="height:100vh;" >
						Hmmm, something's not right...
						Please contact us at hello@nieuventures.com and let us know how we can help.

						<h3 style="text-align:center;font-weight:bold;"> <a href="/">Go back to home</a></h3>

					</div>
					<?php
				}

			?>

		</div>

		<?php showFooter(); ?>

	</body>
</html>
