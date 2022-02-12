@extends('layouts.app')
@section('pataint')
<h3 style="color:Tomato;">Enter your checkup Time And Date</h3>
<form action="{{route('appointment.submit')}}" class="col-md-6" method="post">

{{csrf_field()}}

      <input type="hidden" name="primary_id" value="{{$p->id}}" class="from-control"><br>
      <div class="col-md-4 from group">
          <span>Select Time</span><br>
          <input type="time" name="time" value="{{old('time')}}" class="from-control"><br>
          @error('time')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      
      <div class="col-md-4 from group">
          <span>Select Date</span><br>
          <input type="date" name="date" value="{{old('date')}}" class="from-control"><br>
          @error('date')
          <span class="text-danger">{{$message}}</span>
          @enderror
      </div>
      
      
      <input type="submit" class="btn btn-success" value="Submit">

  </form>
@endsection