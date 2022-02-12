@extends('layouts.app')
@section('pataint')
<form action="{{route('profile.resubmit')}}" class="col-md-6" method="post">

{{csrf_field()}}

      <input type="hidden" name="primary_id" value="{{$p->id}}" class="from-control"><br>
      <div class="col-md-4 from group">
          <span>Name</span><br>
          <input type="text" name="name" value="{{$p->name}}" class="from-control"><br>
          @error('name')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      
      <div class="col-md-4 from group">
          <span>Password</span><br>
          <input type="text" name="password" value="{{$p->password}}" class="from-control"><br>
          @error('password')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      <div class="col-md-4 from group">
          <span>Phone Number</span><br>
          <input type="number" name="phone" value="{{$p->phone}}" class="from-control"><br>
          @error('phone')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      <div class="col-md-4 from group">
          <span>Email Id</span><br>
          <input type="email" name="email" value="{{$p->email}}" class="from-control"><br>
          @error('email')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>

      <div class="col-md-4 from group">
          <span>Address</span><br>
          <input type="text" name="address" value="{{$p->address}}" class="from-control"><br>
          @error('address')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      <input type="submit" class="btn btn-success" value="Confirm_submit">

  </form>
@endsection