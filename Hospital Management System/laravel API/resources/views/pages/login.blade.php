@extends('layouts.login')
@section('content')
<div class="d-lg-flex half">
    <div class="bg order-1 order-md-2" style="background-image: url('login/images/hospital.jpg');"></div>
    <div class="contents order-2 order-md-1">

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <h3>Login to <strong>ABC Hospital</strong></h3>
            <p class="mb-4">Home Of Sick People Including Treatment And Labour</p>
            <form action="{{route('login.check')}}" method="post">
            {{csrf_field()}}
              <div class="form-group first">
                <label for="username">Username</label>
                <input type="text" class="form-control" name="username" placeholder="Your Username" id="username">
              </div>
              <div class="form-group last mb-3">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" placeholder="Your Password" id="password">
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Forgot Password</span>
                  
                  <div class="control__indicator"></div>
                </label>
                <span class="ml-auto"><a href="{{route('recovery')}}" class="forgot-pass">Recovery</a></span> 
              </div>
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">If No Account!</span>
                  
                  <div class="control__indicator"></div>
                </label>
                <span class="ml-auto"><a href="{{route('registration')}}" class="forgot-pass">SIGN UP</a></span> 
              </div>

              <input type="submit" value="Log In" class="btn btn-block btn-primary">

            </form>
            
          </div>
        </div>
      </div>
    </div>

    
  </div>
        
@endsection
