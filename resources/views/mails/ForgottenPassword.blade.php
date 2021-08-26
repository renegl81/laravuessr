@extends('mails.BaseEmail')

@section('content')
    
    <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" object="drag-module-small" >
        <tr>
            <td width="600" valign="middle"> 
                <table width="300" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                    <tr>
                        <td width="100%" height="25"></td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    {{-- titulo --}}
    <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" object="drag-module-small">
        <tr>
            <td width="600" valign="middle" align="center">
                <table width="550" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                    <tr>
                        <td valign="middle" width="100%" style="text-align: center; font-family: Helvetica, Arial, sans-serif; font-size: 40px; color: rgb(63, 67, 69); line-height: 46px; font-weight: bold;"class="fullCenter" >
                            <span style="font-family: 'proxima_nova_rgbold', Helvetica; font-weight: normal;">{{$title}}</span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    {{-- texto --}}
    <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" object="drag-module-small" >
        <tr>
            <td width="600" valign="middle" align="center">
                
                <!-- Buttons + Text --> 
                <table width="550" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                    <tr>
                        <td width="100%" height="30"></td>
                    </tr>
                    <tr>
                    <tr style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="text-align: -webkit-center;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                            Estimado/a <strong style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">{{$user->name}}</strong>,
                            <br><br>
                            Hemos enviado este correo electrónico debido a una solicitud de restablecimiento de contraseña para su cuenta.
                            <br><br>
                            Debe ingresar el token en el campo correspondiente de nuestra plataformar para dar inicio al proceso de recuperación de contraseña.
                            <br><br>
                            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile" object="drag-module-small" >
                                <tr>
                                    <td width="600" valign="middle" align="center">
                                    
                                        <table width="550" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                            <!----------------- Button Center ----------------->
                                            <tr>
                                                <td align="center">
                                                    <table border="0" cellpadding="0" cellspacing="0" align="center"> 
                                                        <tr> 
                                                            <td align="center" height="35" bgcolor="#fe4646" style="border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px; padding-left: 30px; padding-right: 30px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; color: rgb(255, 255, 255); text-transform: uppercase; background-color: rgb(254, 70, 70);">
                                                                <span style="font-family: 'proxima_nova_rgbold', Helvetica; font-weight: normal;">
                                                                    {{$user->reset_password_token}}
                                                                </span>
                                                            </td> 
                                                        </tr> 
                                                    </table> 
                                                </td>
                                            </tr>
                                            <!----------------- End Button Center ----------------->
                                        </table>							
                                    </td>
                                </tr>
                            </table>
                            <br>
                            Si usted no ha solicitado este proceso, no es necesario que realice acción alguna. No obstante, se le recomienda verificar la integridad de sus datos de acceso.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

@endsection