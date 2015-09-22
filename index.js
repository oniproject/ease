var PI = Math.PI
var TwoPI = Math.PI * 2.0
var halfPI = Math.PI * 0.5
var cos = Math.cos
var sin = Math.sin
var pow = Math.pow
var sqrt = Math.sqrt
var abs = Math.abs
var asin = Math.asin

export function Linear(time, duration) {
	return time / duration
}

export function SineIn(time, duration) {
	return -cos(time / duration * halfPI) + 1
}
export function SineOut(time, duration) {
	return sin(time / duration * halfPI)
}
export function SineInOut(time, duration) {
	return -0.5 * (cos(PI * time / duration) - 1)
}

export function QuadIn(time, duration) {
	return (time /= duration) * time
}
export function QuadOut(time, duration) {
	return -(time /= duration) * (time - 2)
}
export function QuadInOut(time, duration) {
	if ((time /= duration * 0.5) < 1)
		return 0.5 * time * time
	return -0.5 * ((--time) * (time - 2) - 1)
}

export function CubicIn(time, duration) {
	return (time /= duration) * time * time
}
export function CubicOut(time, duration) {
	return ((time = time / duration - 1) * time * time + 1)
}
export function CubicInOut(time, duration) {
	if ((time /= duration * 0.5) < 1)
		return 0.5 * time * time * time
	return 0.5 * ((time -= 2) * time * time + 2)
}

export function QuartIn(time, duration) {
	return (time /= duration) * time * time * time
}
export function QuartOut(time, duration) {
	return -((time = time / duration - 1) * time * time * time - 1)
}
export function QuartInOut(time, duration) {
	if ((time /= duration * 0.5) < 1)
		return 0.5 * time * time * time * time
	return -0.5 * ((time -= 2) * time * time * time - 2)
}

export function QuintIn(time, duration) {
	return (time /= duration) * time * time * time * time
}
export function QuintOut(time, duration) {
	return ((time = time / duration - 1) * time * time * time * time + 1)
}
export function QuintInOut(time, duration) {
	if ((time /= duration * 0.5) < 1)
		return 0.5 * time * time * time * time * time
	return 0.5 * ((time -= 2) * time * time * time * time + 2)
}

export function ExpoIn(time, duration) {
	return (time == 0) ? 0 : pow(2, 10 * (time / duration - 1))
	}
export function ExpoOut(time, duration) {
	if (time == duration) return 1
	return (-pow(2, -10 * time / duration) + 1)
}
export function ExpoInOut(time, duration) {
	if (time == 0) return 0
	if (time == duration) return 1
	if ((time /= duration * 0.5) < 1) return 0.5 * pow(2, 10 * (time - 1))
	return 0.5 * (-pow(2, -10 * --time) + 2)
}

export function CircIn(time, duration) {
	return -(sqrt(1 - (time /= duration) * time) - 1)
}
export function CircOut(time, duration) {
	return sqrt(1 - (time = time / duration - 1) * time)
}
export function CircInOut(time, duration) {
	if ((time /= duration * 0.5) < 1)
		return -0.5 * (sqrt(1 - time * time) - 1)
	return 0.5 * (sqrt(1 - (time -= 2) * time) + 1)
}

export function ElasticIn(time, duration, overshootOrAmplitude, period) {
	var s0
	if (time == 0) return 0
	if ((time /= duration) == 1) return 1
	if (period == 0) period = duration * 0.3
	if (overshootOrAmplitude < 1) {
		overshootOrAmplitude = 1
		s0 = period / 4
	} else {
		s0 = period / TwoPI * asin(1 / overshootOrAmplitude)
	}
	return -(overshootOrAmplitude * pow(2, 10 * (time -= 1)) *
			sin((time * duration - s0) * TwoPI / period))
}
export function ElasticOut(time, duration, overshootOrAmplitude, period) {
	var s1
	if (time == 0) return 0
	if ((time /= duration) == 1) return 1
	if (period == 0) period = duration * 0.3
	if (overshootOrAmplitude < 1) {
		overshootOrAmplitude = 1
		s1 = period / 4
	} else {
		s1 = period / TwoPI * asin(1 / overshootOrAmplitude)
	}
	return (overshootOrAmplitude * pow(2, -10 * time) *
			sin((time * duration - s1) * TwoPI / period) + 1)
}
export function ElasticInOut(time, duration, overshootOrAmplitude, period) {
	var s
	if (time == 0) return 0
	if ((time /= duration * 0.5) == 2) return 1
	if (period == 0) period = duration * (0.3 * 1.5)
	if (overshootOrAmplitude < 1) {
		overshootOrAmplitude = 1
		s = period / 4
	} else {
		s = period / TwoPI * asin(1 / overshootOrAmplitude)
	}
	if (time < 1)
		return -0.5 * (overshootOrAmplitude * pow(2, 10 * (time -= 1))
				* sin((time * duration - s) * TwoPI / period))
	return overshootOrAmplitude * pow(2, -10 * (time -= 1))
		* sin((time * duration - s) * TwoPI / period) * 0.5 + 1
}

export function BackIn(time, duration, overshootOrAmplitude, period) {
	return (time /= duration) * time * ((overshootOrAmplitude + 1) * time - overshootOrAmplitude)
}
export function BackOut(time, duration, overshootOrAmplitude, period) {
	return ((time = time / duration - 1) * time * ((overshootOrAmplitude + 1)
				* time + overshootOrAmplitude) + 1)
}
export function BackInOut(time, duration, overshootOrAmplitude, period) {
	if ((time /= duration * 0.5) < 1)
		return 0.5 * (time * time * (((overshootOrAmplitude *= (1.525)) + 1)
					* time - overshootOrAmplitude))
	return 0.5 * ((time -= 2) * time * (((overshootOrAmplitude *= (1.525)) + 1)
				* time + overshootOrAmplitude) + 2)
}

export function BounceIn(time, duration, overshootOrAmplitude, period) {
	return 1 - BounceOut(duration - time, duration, -1, -1)
}
export function BounceOut(time, duration, overshootOrAmplitude, period) {
	if ((time /= duration) < (1 / 2.75)) {
		return (7.5625 * time * time)
	}
	if (time < (2 / 2.75)) {
		return (7.5625 * (time -= (1.5 / 2.75)) * time + 0.75)
	}
	if (time < (2.5 / 2.75)) {
		return (7.5625 * (time -= (2.25 / 2.75)) * time + 0.9375)
	}
	return (7.5625 * (time -= (2.625 / 2.75)) * time + 0.984375)
}
export function BounceInOut(time, duration, overshootOrAmplitude, period) {
	if (time < duration*0.5) {
		return BounceIn(time*2, duration, -1, -1)*0.5
	}
	return BounceOut(time*2 - duration, duration, -1, -1)*0.5 + 0.5
}


/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
