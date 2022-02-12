<html>
    <head></head>
    <body style="background-color:Dodgerblue; max-width: max-content; margin: auto;">
    <br><br><br><br><br>
    <h1 style="color:rgb(0,0,0);"><b>Registration </b></h3>
<form action="{{route('registration.submit')}}" class="col-md-6" method="post">

{{csrf_field()}}

      <div class="col-md-4 from group">
          <span>Name</span><br>
          <input type="text" name="name" value="{{old('name')}}" class="from-control"><br>
          @error('name')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      <div class="col-md-4 from group">
          <span>Username</span><br>
          <input type="text" name="username" value="{{old('username')}}" class="from-control"><br>
          @error('username')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      <div class="col-md-4 from group">
          <span>Password</span><br>
          <input type="text" name="password" value="{{old('password')}}" class="from-control"><br>
          @error('password')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      <div class="col-md-4 from group">
          <span>Phone Number</span><br>
          <input type="number" name="phone" value="{{old('phone')}}" class="from-control"><br>
          @error('phone')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      <div class="col-md-4 from group">
          <span>Email Id</span><br>
          <input type="email" name="email" value="{{old('email')}}" class="from-control"><br>
          @error('email')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      <div class="col-md-4 from group">
          <span>Blood Group</span><br>
          <select name="group" value="{{old('group')}}" class="from-control">
					<option selected disabled>Select Blood Group</option>
					<?php
                    $groups=array("A+","O+","B+","AB+","A-","O-","B-","AB-");
                    $group="";
						foreach($groups as $i)
						{
							if($group == $i)
								echo "<option selected>$i</option>";
							else
								echo "<option>$i</option>";
						}
					?>
				</select>
          @error('group')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>

      <div class="col-md-4 from group">
          <span>Date Of Birth</span><br>
          <input type="date" name="dob" value="{{old('dob')}}" class="from-control"><br>
          @error('dob')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>

      <div class="col-md-4 from group">
          <span>Address</span><br>
          <input type="text" name="address" value="{{old('address')}}" class="from-control"><br>
          @error('address')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      <input type="submit" class="btn btn-success" value="submit">

  </form>
  </body>
</html>