@extends('layouts.app')
@section('pataint')
<h1>WELLCOME :{{$user->name}}</h1>
<br><br><br>
<h1>Doctor List<h1>
<table class="table table-borded">
      <tr>
          <td>Serial</td>
          <td>Name</td>
          <td>Treatment time</td>
          <td>Appointment set</td>
      </tr>
      <?php $i=1; ?>
      @foreach($doctor as $p)
      <tr>
          <td>{{$i}}</td>
          <td>{{$p->doc_name}}</td>
          <td>{{$p->available}}</td>
          <td><a href="/appointment/{{$p->id}}"><h5 style="color:rgb(0, 0, 255);">Confirm</h5></td>
          <?php $i++; ?>
      </tr>   
      @endforeach
    

  </table>
  <br><br><br>
<h1>Labtest List<h1>
<table class="table table-borded">
      <tr>
          <td>Serial</td>
          <td>Test Name</td>
          <td>Available Open time</td>
          <td>Request</td>
      </tr>
      <?php $i=1; ?>
      @foreach($lab as $p)
      <tr>
          <td>{{$i}}</td>
          <td>{{$p->type}}</td>
          <td>{{$p->available}}</td>
          <td><a href="/test/{{$p->id}}"><h5 style="background-color:rgb(1, 1, 1);">Confirm</h5></td>
          <?php $i++; ?>
      </tr>   
      @endforeach
    

  </table>
  <br><br><br>
<h1>Medicin Corner<h1>
<table class="table table-borded">
      <tr>
          <td>Serial</td>
          <td>Medicin Group</td>
          <td>Status</td>
      </tr>
      <?php $i=1; ?>
      @foreach($medicin as $p)
      <tr>
          <td>{{$i}}</td>
          <td>{{$p->group_name}}</td>
          <td>{{$p->status}}</td>
          <?php $i++; ?>
      </tr>   
      @endforeach
    

  </table>  

  <br><br><br>
<h1>Cabin<h1>
<table class="table table-borded">
      <tr>
          <td>Serial</td>
          <td>Cabin No</td>
          <td>Slot</td>
          <td>Select</td>
      </tr>
      <?php $i=1; ?>
      @foreach($cabin as $p)
      @if($p->slot!="booked")
      <tr>
          
          <td>{{$i}}</td>
          <td>{{$p->cabin_no}}</td>
          <td>{{$p->slot}}</td>
          <td><a href="/cabin/{{$p->id}}"><h5 style="color:rgb(255, 0, 0);">Booking</h5></td>
          <?php $i++; ?>
      </tr>
      @endif   
      @endforeach
    
  </table>
@endsection