@extends('layouts.app')
@section('pataint')

<br><br><br>
<h1>Doctor Appointment List<h1>
<table class="table table-borded">
      <tr>
          <td>Serial</td>
          <td>Name</td>
          <td>Treatment date</td>
          <td>Treatment time</td>
      </tr>
      <?php $i=1; ?>
      @foreach($appointment as $p)
      @if ($p->pataint_username == $user->username)
      <tr>
           
          <td>{{$i}}</td>
          <td>{{$p->doctor_name}}</td>
          <td>{{$p->app_date}}</td>
          <td>{{$p->app_time}}</td>
         
          <?php $i++; ?>
      </tr>
      @endif  
      @endforeach
    

  </table>
  <br><br><br>
<h1>Labtest List<h1>
<table class="table table-borded">
      <tr>
          <td>Serial</td>
          <td>Test Name</td>
          <td>Test date</td>
          <td>Test time</td>
          
      </tr>
      <?php $i=1; ?>
      @foreach($lab as $p)
      @if ($p->pataint_username == $user->username)
      <tr>
          <td>{{$i}}</td>
          <td>{{$p->test_name}}</td>
          <td>{{$p->date}}</td>
          <td>{{$p->time}}</td>
          
          <?php $i++; ?>
      </tr>
      @endif 
      @endforeach
    

  </table>
  
  <br><br><br>
<h1>Cabin Select List<h1>
<table class="table table-borded">
      <tr>
          <td>Serial</td>
          <td>Cabin No</td>
          <td>date</td>
          
      </tr>
      <?php $i=1; ?>
      @foreach($cabin as $p)
      @if ($p->pataint_username == $user->username)
      <tr>
          
          <td>{{$i}}</td>
          <td>{{$p->cabin_no}}</td>
          <td>{{$p->date}}</td>
          
          <?php $i++; ?>
      </tr>
      @endif  
      @endforeach
    
  </table>
@endsection