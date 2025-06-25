-- title:   game
-- author:  Gabriel Sanchez, gabrielf.sanchez@bue.edu.ar
-- desc:    short description
-- site:    gsxx.github.io
-- license: MIT License
-- version: 0.1
-- script:  lua

t=0
x=96
y=24
bounds={
	x=240-8,
	y=136-8
}
player={
	x=0,
	y=0
}

sprite={
	id=1,
	x=0,
	y=0,
	colorkey=-1,
	scale=1,
	flip=0,
	rotate=0,
	w=1,
	h=1
}

texto={
	mensaje='',
	x=0,
	y=0,
	color=0,
	fixed=false,
	scale=5,
	smallfont=true
}

function moverSprite(instanciaSprite)
	spr(
		instanciaSprite.id,
		instanciaSprite.x,
		instanciaSprite.y,
		instanciaSprite.colorkey,
		instanciaSprite.scale,
		instanciaSprite.flip,
		instanciaSprite.rotate,
		instanciaSprite.w,
		instanciaSprite.h
	)
end

function moverTexto(instanciaTexto)
	print(
		instanciaTexto.mensaje,
		instanciaTexto.x,
		instanciaTexto.y,
		instanciaTexto.color,
		instanciaTexto.fixed,
		instanciaTexto.scale,
		instanciaTexto.smallfont
	)
end

function coordenadas(instanciaTexto)
	return instanciaTexto.x .. ',' .. instanciaTexto.y
end

function TIC()

	if btn(0) then
		player.y=player.y-1 
	end
	if btn(1) then 
		player.y=player.y+1 
	end
	if btn(2) then 
		player.x=player.x-1 
	end
	if btn(3) then 
		player.x=player.x+1 
	end

	cls(12)
	sprite.x=player.x
	sprite.y=player.y
	
	texto.x=player.x
	texto.y=player.y
	
	texto.mensaje=1/60
	--coordenadas(texto)
	
	moverSprite(sprite)
	verde=sprite
	verde.id=0
	verde.x=100
	verde.y=100
	verde.scale=1
	verde.w=16
	verde.h=16
	moverSprite(verde)
	sprite.id=1
	moverTexto(texto)
	t=t+1
end

-- <TILES>
-- 000:5555555555555555555555555555555555555555555555555555555555555555
-- 001:eccccccccc888888caaaaaaaca888888cacccccccacc0ccccacc0ccccacc0ccc
-- 002:ccccceee8888cceeaaaa0cee888a0ceeccca0ccc0cca0c0c0cca0c0c0cca0c0c
-- 003:eccccccccc888888caaaaaaaca888888cacccccccacccccccacc0ccccacc0ccc
-- 004:ccccceee8888cceeaaaa0cee888a0ceeccca0cccccca0c0c0cca0c0c0cca0c0c
-- 005:2222222222222222222222222222222222222222222222222222222222222222
-- 016:8888888888888888888888888888888888888888888888888888888888888888
-- 017:cacccccccaaaaaaacaaacaaacaaaaccccaaaaaaac8888888cc000cccecccccec
-- 018:ccca00ccaaaa0ccecaaa0ceeaaaa0ceeaaaa0cee8888ccee000cceeecccceeee
-- 019:cacccccccaaaaaaacaaacaaacaaaaccccaaaaaaac8888888cc000cccecccccec
-- 020:ccca00ccaaaa0ccecaaa0ceeaaaa0ceeaaaa0cee8888ccee000cceeecccceeee
-- </TILES>

-- <WAVES>
-- 000:00000000ffffffff00000000ffffffff
-- 001:0123456789abcdeffedcba9876543210
-- 002:0123456789abcdef0123456789abcdef
-- </WAVES>

-- <SFX>
-- 000:000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000304000000000
-- </SFX>

-- <TRACKS>
-- 000:100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
-- </TRACKS>

-- <PALETTE>
-- 000:1a1c2c5d275db13e53ef7d57ffcd75a7f07038b76425717929366f3b5dc941a6f673eff7f4f4f494b0c2566c86333c57
-- </PALETTE>

