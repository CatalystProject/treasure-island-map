<!doctype html>
<html lang="en">
<head>
<meta charset='utf-8'/>
<title>Catalyst! onSupply Energy Discoverer</title>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700|Share:400,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="css/mapbox.css">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/bootstrap-datepicker.css">
<link rel="stylesheet" href="css/form.css">
</head>
<body class="no-touch">
<div id="masthead">
	<div class="limiter">
		<div class="title">
			<h2><a href="http://www.catalystproject.org.uk/projects/sprints/on-supply/">Catalyst! onSupply</a></h2>
	        	<span class="sub-title">Energy Discovery</span>
	      </div>
	      <div id="nav">
	        <a class="enter-form active" href="#">Enter an Energy Detection</a>
	        <a class="view-data" href="index.html">View Energy Data</a>
	        <a class="issues" href="http://www.catalystproject.org.uk/projects/sprints/on-supply/">Connect</a>
		
		
		</div>
	</div>
</div>
<div id='form-layout'>
    <h1>Submit a report</h1>
	<form class="form-horizontal">
    	<p class="help-block error">All fields are required.</p>
		<fieldset>
			<legend>Where did you detect the energy?</legend>

			<div id="map-control" class="control-group">
				<div class="controls">
    				<div id='map'></div>
    				<p class="help-block">Click on the map to select a location</p>
				</div>
				<div class="control-group">
					<label class="control-label" for="entry_855548269">Latitude</label>
					<div class="controls">
						<input type="text" class="input-xlarge" id="entry_855548269" name="entry.855548269">
					</div>
					<label class="control-label" for="entry_1672423225">Longitude</label>
					<div class="controls">
						<input type="text" class="input-xlarge" name="entry.1672423225" id="entry_1672423225" >
					</div>
				</div>
			</div>

		</fieldset>

		<fieldset>
			<legend>When were the readings taken?</legend>
			<div class="control-group">
				<label class="control-label" for="entry_284647925">Date observed</label>
				<div class="controls">
					<input type="text" class="input-xlarge" name="entry.284647925"  id="entry_284647925">
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" for="entry_574205951">Time observed</label>
				<div class="controls">
					<input type="text" class="input-xlarge" name="entry.574205951" id="entry_574205951">
				</div>
			</div>
		</fieldset>

		<fieldset>
			<legend>Tell us the details</legend>
			<div class="control-group">
				<label class="control-label">Wind Power Observed</label>
				<div class="controls">
					<label class="radio"><input type="radio" name="entry.788824438" value="0" id="group_788824438_1" role="radio" class="ss-q-radio" aria-label="0" required="" aria-required="true">0</label>
					<label class="radio"><input type="radio" name="entry.788824438" value="1" id="group_788824438_2" role="radio" class="ss-q-radio" aria-label="1" required="" aria-required="true">1</label>
					<label class="radio"><input type="radio" name="entry.788824438" value="2" id="group_788824438_3" role="radio" class="ss-q-radio" aria-label="2" required="" aria-required="true">2</label>
					<label class="radio"><input type="radio" name="entry.788824438" value="3" id="group_788824438_4" role="radio" class="ss-q-radio" aria-label="3" required="" aria-required="true">3</label>
					<label class="radio"><input type="radio" name="entry.788824438" value="4" id="group_788824438_5" role="radio" class="ss-q-radio" aria-label="4" required="" aria-required="true">4</label>
					<label class="radio"><input type="radio" name="entry.788824438" value="5" id="group_788824438_6" role="radio" class="ss-q-radio" aria-label="5" required="" aria-required="true">5</label>
				</div>
			</div>	
			<div class="control-group">
				<label class="control-label">Solar Power Observed</label>
				<div class="controls">
					<label class="radio"><input type="radio" name="entry.394802251" value="0" id="group_394802251_1" role="radio" class="ss-q-radio" aria-label="0" required="" aria-required="true">0</label>
					<label class="radio"><input type="radio" name="entry.394802251" value="1" id="group_394802251_2" role="radio" class="ss-q-radio" aria-label="1" required="" aria-required="true">1</label>
					<label class="radio"><input type="radio" name="entry.394802251" value="2" id="group_394802251_3" role="radio" class="ss-q-radio" aria-label="2" required="" aria-required="true">2</label>
					<label class="radio"><input type="radio" name="entry.394802251" value="3" id="group_394802251_4" role="radio" class="ss-q-radio" aria-label="3" required="" aria-required="true">3</label>
					<label class="radio"><input type="radio" name="entry.394802251" value="4" id="group_394802251_5" role="radio" class="ss-q-radio" aria-label="4" required="" aria-required="true">4</label>
					<label class="radio"><input type="radio" name="entry.394802251" value="5" id="group_394802251_6" role="radio" class="ss-q-radio" aria-label="5" required="" aria-required="true">5</label>
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" for="entry_666994148">Description</label>
				<div class="controls">
					<textarea class="input-xlarge" name="entry.666994148"  id="entry_666994148" ></textarea>
					<p class="help-block">Describe the details of your observation</p>
				</div>
			</div>
					
		</fieldset>
		<fieldset>
			<legend>Provide us with a picture</legend>
			<div class="control-group">
				<label class="control-label" for="entry_1036124373">Link to Image</label>
				<div class="controls">
					<input type="text" class="input-xlarge" name="entry.1036124373"  id="entry_1036124373">
				</div>
			</div>								
		</fieldset>
		<fieldset>
			<legend>Let us know your email</legend>
			<div class="control-group">
				<label class="control-label" for="entry_1106057243">Email Address</label>
				<div class="controls">
					<input type="text" class="input-xlarge" name="entry.1106057243"  id="entry_1106057243">
				</div>
			</div>								
		</fieldset>

		<div class="form-actions">
            <input type="submit" class="btn btn-primary" data-loading-text="Submitting..." name="submit" value="Submit">
        </div>

<!--
		<input type="hidden" name="entry.1.single" id="entry_1" value="">
		<input type="hidden" name="entry.2.single" id="entry_2" value="">
!-->		
	</form>
</div>
<script src="js/jquery.min.js"></script>
<script src="js/mapbox.min.js"></script>
<script src="js/mapbox-googledocs.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="js/bootstrap-timepicker.min.js"></script>
<script type="text/javascript" src="js/jquery.jqgoogleforms.min.js"></script>
<script src="js/form.js"></script>
</body>
</html>
