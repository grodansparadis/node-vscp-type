// VSCP type definition file
//
// Copyright (C) 2012-2019 Ake Hedman, Grodans Paradis AB
// <akhe@grodansparadis.com>
// Copyright (c) 2015-2019 Andreas Merkle
// <vscp@blue-andi.de>
//
// Licence:
// The MIT License (MIT)
// [OSI Approved License]
//
// The MIT License (MIT)
//
// Copyright (c) 2012-2019 Grodans Paradis AB (Paradise of the Frog)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// Alternative licenses for VSCP & Friends may be arranged by contacting
// Grodans Paradis AB at info@grodansparadis.com, http://www.grodansparadis.com
//

/*
            !!!!!!!!!!!!!!!!!!!!  W A R N I N G  !!!!!!!!!!!!!!!!!!!!
                           This file is auto-generated
                see https://github.com/grodansparadis/vscp-classes
                        Generated: 2019-09-25 15:12:39.347836
*/


var exports = module.exports = {};

//  CLASS1.PROTOCOL = 0  -  VSCP Protocol Functionality
module.exports.VSCP_TYPE_PROTOCOL_GENERAL = 0,
module.exports.VSCP_TYPE_PROTOCOL_SEGCTRL_HEARTBEAT = 1,
module.exports.VSCP_TYPE_PROTOCOL_NEW_NODE_ONLINE = 2,
module.exports.VSCP_TYPE_PROTOCOL_PROBE_ACK = 3,
module.exports.VSCP_TYPE_PROTOCOL_RESERVED4 = 4,
module.exports.VSCP_TYPE_PROTOCOL_RESERVED5 = 5,
module.exports.VSCP_TYPE_PROTOCOL_SET_NICKNAME = 6,
module.exports.VSCP_TYPE_PROTOCOL_NICKNAME_ACCEPTED = 7,
module.exports.VSCP_TYPE_PROTOCOL_DROP_NICKNAME = 8,
module.exports.VSCP_TYPE_PROTOCOL_READ_REGISTER = 9,
module.exports.VSCP_TYPE_PROTOCOL_RW_RESPONSE = 10,
module.exports.VSCP_TYPE_PROTOCOL_WRITE_REGISTER = 11,
module.exports.VSCP_TYPE_PROTOCOL_ENTER_BOOT_LOADER = 12,
module.exports.VSCP_TYPE_PROTOCOL_ACK_BOOT_LOADER = 13,
module.exports.VSCP_TYPE_PROTOCOL_NACK_BOOT_LOADER = 14,
module.exports.VSCP_TYPE_PROTOCOL_START_BLOCK = 15,
module.exports.VSCP_TYPE_PROTOCOL_BLOCK_DATA = 16,
module.exports.VSCP_TYPE_PROTOCOL_BLOCK_DATA_ACK = 17,
module.exports.VSCP_TYPE_PROTOCOL_BLOCK_DATA_NACK = 18,
module.exports.VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA = 19,
module.exports.VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_ACK = 20,
module.exports.VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_NACK = 21,
module.exports.VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE = 22,
module.exports.VSCP_TYPE_PROTOCOL_RESET_DEVICE = 23,
module.exports.VSCP_TYPE_PROTOCOL_PAGE_READ = 24,
module.exports.VSCP_TYPE_PROTOCOL_PAGE_WRITE = 25,
module.exports.VSCP_TYPE_PROTOCOL_RW_PAGE_RESPONSE = 26,
module.exports.VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_PROBE = 27,
module.exports.VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_RESPONSE = 28,
module.exports.VSCP_TYPE_PROTOCOL_INCREMENT_REGISTER = 29,
module.exports.VSCP_TYPE_PROTOCOL_DECREMENT_REGISTER = 30,
module.exports.VSCP_TYPE_PROTOCOL_WHO_IS_THERE = 31,
module.exports.VSCP_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE = 32,
module.exports.VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO = 33,
module.exports.VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO_RESPONSE = 34,
module.exports.VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF = 35,
module.exports.VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF_RESPONSE = 36,
module.exports.VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_READ = 37,
module.exports.VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_WRITE = 38,
module.exports.VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_RESPONSE = 39,
module.exports.VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST = 40,
module.exports.VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST_RESPONSE = 41,
module.exports.VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_ACK = 48,
module.exports.VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_NACK = 49,
module.exports.VSCP_TYPE_PROTOCOL_START_BLOCK_ACK = 50,
module.exports.VSCP_TYPE_PROTOCOL_START_BLOCK_NACK = 51;
 
//  CLASS1.ALARM = 1  -  Alarm functionality
module.exports.VSCP_TYPE_ALARM_GENERAL = 0,
module.exports.VSCP_TYPE_ALARM_WARNING = 1,
module.exports.VSCP_TYPE_ALARM_ALARM = 2,
module.exports.VSCP_TYPE_ALARM_SOUND = 3,
module.exports.VSCP_TYPE_ALARM_LIGHT = 4,
module.exports.VSCP_TYPE_ALARM_POWER = 5,
module.exports.VSCP_TYPE_ALARM_EMERGENCY_STOP = 6,
module.exports.VSCP_TYPE_ALARM_EMERGENCY_PAUSE = 7,
module.exports.VSCP_TYPE_ALARM_EMERGENCY_RESET = 8,
module.exports.VSCP_TYPE_ALARM_EMERGENCY_RESUME = 9,
module.exports.VSCP_TYPE_ALARM_ARM = 10,
module.exports.VSCP_TYPE_ALARM_DISARM = 11,
module.exports.VSCP_TYPE_ALARM_WATCHDOG = 12;
 
//  CLASS1.SECURITY = 2  -  Security
module.exports.VSCP_TYPE_SECURITY_GENERAL = 0,
module.exports.VSCP_TYPE_SECURITY_MOTION = 1,
module.exports.VSCP_TYPE_SECURITY_GLASS_BREAK = 2,
module.exports.VSCP_TYPE_SECURITY_BEAM_BREAK = 3,
module.exports.VSCP_TYPE_SECURITY_SENSOR_TAMPER = 4,
module.exports.VSCP_TYPE_SECURITY_SHOCK_SENSOR = 5,
module.exports.VSCP_TYPE_SECURITY_SMOKE_SENSOR = 6,
module.exports.VSCP_TYPE_SECURITY_HEAT_SENSOR = 7,
module.exports.VSCP_TYPE_SECURITY_PANIC_SWITCH = 8,
module.exports.VSCP_TYPE_SECURITY_DOOR_OPEN = 9,
module.exports.VSCP_TYPE_SECURITY_WINDOW_OPEN = 10,
module.exports.VSCP_TYPE_SECURITY_CO_SENSOR = 11,
module.exports.VSCP_TYPE_SECURITY_FROST_DETECTED = 12,
module.exports.VSCP_TYPE_SECURITY_FLAME_DETECTED = 13,
module.exports.VSCP_TYPE_SECURITY_OXYGEN_LOW = 14,
module.exports.VSCP_TYPE_SECURITY_WEIGHT_DETECTED = 15,
module.exports.VSCP_TYPE_SECURITY_WATER_DETECTED = 16,
module.exports.VSCP_TYPE_SECURITY_CONDENSATION_DETECTED = 17,
module.exports.VSCP_TYPE_SECURITY_SOUND_DETECTED = 18,
module.exports.VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL = 19,
module.exports.VSCP_TYPE_SECURITY_TAMPER = 20;
 
//  CLASS1.MEASUREMENT = 10  -  Measurement
module.exports.VSCP_TYPE_MEASUREMENT_GENERAL = 0,
module.exports.VSCP_TYPE_MEASUREMENT_COUNT = 1,
module.exports.VSCP_TYPE_MEASUREMENT_LENGTH = 2,
module.exports.VSCP_TYPE_MEASUREMENT_MASS = 3,
module.exports.VSCP_TYPE_MEASUREMENT_TIME = 4,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT = 5,
module.exports.VSCP_TYPE_MEASUREMENT_TEMPERATURE = 6,
module.exports.VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE = 7,
module.exports.VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT = 8,
module.exports.VSCP_TYPE_MEASUREMENT_FREQUENCY = 9,
module.exports.VSCP_TYPE_MEASUREMENT_RADIOACTIVITY = 10,
module.exports.VSCP_TYPE_MEASUREMENT_FORCE = 11,
module.exports.VSCP_TYPE_MEASUREMENT_PRESSURE = 12,
module.exports.VSCP_TYPE_MEASUREMENT_ENERGY = 13,
module.exports.VSCP_TYPE_MEASUREMENT_POWER = 14,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE = 15,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL = 16,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE = 17,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE = 18,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE = 19,
module.exports.VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH = 20,
module.exports.VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX = 21,
module.exports.VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY = 22,
module.exports.VSCP_TYPE_MEASUREMENT_INDUCTANCE = 23,
module.exports.VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT = 24,
module.exports.VSCP_TYPE_MEASUREMENT_ILLUMINANCE = 25,
module.exports.VSCP_TYPE_MEASUREMENT_RADIATION_DOSE = 26,
module.exports.VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY = 27,
module.exports.VSCP_TYPE_MEASUREMENT_VOLUME = 28,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY = 29,
module.exports.VSCP_TYPE_MEASUREMENT_ANGLE = 30,
module.exports.VSCP_TYPE_MEASUREMENT_POSITION = 31,
module.exports.VSCP_TYPE_MEASUREMENT_SPEED = 32,
module.exports.VSCP_TYPE_MEASUREMENT_ACCELERATION = 33,
module.exports.VSCP_TYPE_MEASUREMENT_TENSION = 34,
module.exports.VSCP_TYPE_MEASUREMENT_HUMIDITY = 35,
module.exports.VSCP_TYPE_MEASUREMENT_FLOW = 36,
module.exports.VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE = 37,
module.exports.VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER = 38,
module.exports.VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY = 39,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE = 40,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE = 41,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE = 42,
module.exports.VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY = 43,
module.exports.VSCP_TYPE_MEASUREMENT_LUMINANCE = 44,
module.exports.VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION = 45,
module.exports.VSCP_TYPE_MEASUREMENT_RESERVED46 = 46,
module.exports.VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT = 47,
module.exports.VSCP_TYPE_MEASUREMENT_RESERVED48 = 48,
module.exports.VSCP_TYPE_MEASUREMENT_DEWPOINT = 49,
module.exports.VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL = 50,
module.exports.VSCP_TYPE_MEASUREMENT_ALTITUDE = 51,
module.exports.VSCP_TYPE_MEASUREMENT_AREA = 52,
module.exports.VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY = 53,
module.exports.VSCP_TYPE_MEASUREMENT_RADIANCE = 54,
module.exports.VSCP_TYPE_MEASUREMENT_IRRADIANCE = 55,
module.exports.VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE = 56,
module.exports.VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE = 57,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE = 58,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_DENSITY = 59,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_LEVEL = 60;
 
