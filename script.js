import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Switch, 
  Slider, 
  SafeAreaView, 
  StatusBar,
  Dimensions
} from 'react-native';
import { 
  Crosshair, 
  Smartphone, 
  Flame, 
  Sliders, 
  Zap, 
  Wrench, 
  BarChart2, 
  Info, 
  Share2, 
  Shield, 
  Layers,
  Gamepad2
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function App() {
  // Navigation State: 'sensitivity' | 'booster' | 'options' | 'stats'
  const [currentTab, setCurrentTab] = useState('sensitivity');

  // Screen 1: Sensitivity States
  const [sensi, setSensi] = useState({
    geral: 188,
    pontoVermelho: 125,
    mira2x: 68,
    mira4x: 75,
    miraSniper: 55,
    dpi: 546,
    botaoTiro: 39
  });

  // Screen 3: Extra Options States
  const [options, setOptions] = useState({
    maisSensibilidade: false,
    sensibilidadeMaxima: false,
    fpsTela: true,
    limparTela: true,
    toqueSuave: true,
  });
  const [fontScale, setFontScale] = useState('0,1');

  // Toggle handlers
  const toggleOption = (key) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Background Grid Pattern & Lightning Glow Effect */}
      <View className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff0000_1px,transparent_1px)] [background-size:16px_16px]" />
      <View className="absolute bottom-6 right-6 opacity-20">
        <Zap size={80} color="#ff0000" fill="#ff0000" />
      </View>

      {/* Top Header Navigation */}
      <View className="flex-row justify-around items-center py-4 border-b border-zinc-900 bg-black/80">
        <TouchableOpacity onPress={() => setCurrentTab('sensitivity')} className={`p-2 ${currentTab === 'sensitivity' ? 'border-b-2 border-red-600' : ''}`}>
          <Sliders size={24} color={currentTab === 'sensitivity' ? '#ef4444' : '#71717a'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentTab('booster')} className={`p-2 ${currentTab === 'booster' ? 'border-b-2 border-red-600' : ''}`}>
          <Gamepad2 size={24} color={currentTab === 'booster' ? '#ef4444' : '#71717a'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentTab('options')} className={`p-2 ${currentTab === 'options' ? 'border-b-2 border-red-600' : ''}`}>
          <Wrench size={24} color={currentTab === 'options' ? '#ef4444' : '#71717a'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentTab('stats')} className={`p-2 ${currentTab === 'stats' ? 'border-b-2 border-red-600' : ''}`}>
          <BarChart2 size={24} color={currentTab === 'stats' ? '#ef4444' : '#71717a'} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} className="flex-1 px-4 pt-4">
        
        {/* SCREEN 1: GERADOR DE SENSIBILIDADE */}
        {currentTab === 'sensitivity' && (
          <View className="w-full">
            <View className="flex-row justify-between items-center mb-4">
              <View className="flex-row items-center bg-zinc-900/50 px-3 py-1.5 rounded-md border border-zinc-800">
                <Sliders size={16} color="#ef4444" className="mr-2" />
                <Text className="text-white font-bold text-xs uppercase tracking-wider">Gerador de Sensibilidade</Text>
              </View>
              <TouchableOpacity className="bg-red-600 flex-row items-center px-3 py-1.5 rounded-md">
                <Wrench size={12} color="#fff" className="mr-1" />
                <Text className="text-white text-[10px] font-bold uppercase">Ajuste Automático</Text>
              </TouchableOpacity>
            </View>

            {/* Custom Transparent Card Wrapper */}
            <View className="bg-zinc-950/90 border-2 border-red-950/40 rounded-3xl p-5 space-y-5 shadow-2xl shadow-red-900/20">
              
              {/* Slider Component Utility */}
              {renderSliderRow("Geral", sensi.geral, 200, (v) => setSensi({...sensi, geral: Math.round(v)}), <Crosshair size={18} color="#a1a1aa" />)}
              {renderSliderRow("Ponto Vermelho", sensi.pontoVermelho, 200, (v) => setSensi({...sensi, pontoVermelho: Math.round(v)}), <Crosshair size={18} color="#a1a1aa" />)}
              {renderSliderRow("Mira 2x", sensi.mira2x, 200, (v) => setSensi({...sensi, mira2x: Math.round(v)}), <Crosshair size={18} color="#a1a1aa" />)}
              {renderSliderRow("Mira 4x", sensi.mira4x, 200, (v) => setSensi({...sensi, mira4x: Math.round(v)}), <Crosshair size={18} color="#a1a1aa" />)}
              {renderSliderRow("Mira Sniper", sensi.miraSniper, 200, (v) => setSensi({...sensi, miraSniper: Math.round(v)}), <Crosshair size={18} color="#a1a1aa" />)}
              {renderSliderRow("DPI Sugerido", sensi.dpi, 1000, (v) => setSensi({...sensi, dpi: Math.round(v)}), <Smartphone size={18} color="#a1a1aa" />)}
              {renderSliderRow("Escala do Botão de Tiro", sensi.botaoTiro, 100, (v) => setSensi({...sensi, botaoTiro: Math.round(v)}), <Flame size={18} color="#a1a1aa" />)}

            </View>

            <TouchableOpacity className="bg-red-600 w-full py-3.5 rounded-full mt-6 items-center shadow-lg shadow-red-600/30">
              <Text className="text-white font-bold text-sm">💾 Salvar Config</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* SCREEN 2: POWER PLAY OPTIMIZER */}
        {currentTab === 'booster' && (
          <View className="w-full items-center justify-center pt-8">
            <View className="bg-gradient-to-r from-red-700 to-red-500 w-full flex-row justify-between items-center p-4 rounded-2xl mb-12 border border-red-500/30">
              <View className="flex-row items-center space-x-3">
                <View className="bg-white p-2 rounded-xl">
                  <Text className="text-red-600 font-black text-xl">F</Text>
                </View>
                <View>
                  <Text className="text-white font-black text-base tracking-wide">POWER PLAY</Text>
                  <Text className="text-zinc-200 text-xs">Otimizar</Text>
                </View>
              </View>
              <View className="bg-red-900/50 p-2.5 rounded-full">
                <Gamepad2 size={22} color="#fff" />
              </View>
            </View>

            {/* Interactive Animated Ring Frame */}
            <TouchableOpacity className="w-64 h-64 border-4 border-red-600/20 rounded-full items-center justify-center bg-zinc-950/80 shadow-2xl shadow-red-600/10">
              <View className="w-48 h-48 border-4 border-t-red-600 border-r-red-600 border-b-zinc-900 border-l-zinc-900 rounded-full items-center justify-center transform rotate-45">
                <View className="transform -rotate-45">
                  <Gamepad2 size={64} color="#fff" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* SCREEN 3: OPÇÕES EXTRAS */}
        {currentTab === 'options' && (
          <View className="w-full">
            <View className="flex-row items-center bg-zinc-900/50 px-3 py-1.5 rounded-md border border-zinc-800 self-start mb-4">
              <Wrench size={16} color="#ef4444" className="mr-2" />
              <Text className="text-white font-bold text-xs uppercase tracking-wider">Opções Extras</Text>
            </View>

            <View className="bg-zinc-950/90 border border-zinc-900 rounded-2xl p-4 space-y-4 mb-6">
              {renderToggleRow("Mais Sensibilidade", options.maisSensibilidade, () => toggleOption('maisSensibilidade'), <Layers size={16} color="#fff" />)}
              {renderToggleRow("Sensibilidade Maxima", options.sensibilidadeMaxima, () => toggleOption('sensibilidadeMaxima'), <Zap size={16} color="#fff" />)}
              {renderToggleRow("FPS na Tela", options.fpsTela, () => toggleOption('fpsTela'), <BarChart2 size={16} color="#fff" />)}
              {renderToggleRow("Limpar Tela", options.limparTela, () => toggleOption('limparTela'), <Crosshair size={16} color="#fff" />)}
              {renderToggleRow("Toque Suave", options.toqueSuave, () => toggleOption('toqueSuave'), <Smartphone size={16} color="#fff" />)}
            </View>

            {/* Font Scale Selection Panel */}
            <View className="bg-zinc-950/90 border border-zinc-900 rounded-2xl p-4">
              <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center space-x-2">
                  <View className="bg-red-600 p-1.5 rounded-md">
                    <Text className="text-white font-bold text-xs">Tt</Text>
                  </View>
                  <Text className="text-white font-bold text-sm">Escala da Fonte</Text>
                </View>
                <TouchableOpacity className="bg-red-600 flex-row items-center px-3 py-1 rounded-md">
                  <Text className="text-white text-xs font-bold">✓ Confirmar</Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-between mb-4">
                {['0,1', '0,5', '1.0', '1.5'].map((scale) => (
                  <TouchableOpacity 
                    key={scale}
                    onPress={() => setFontScale(scale)}
                    className={`flex-1 mx-1 py-3 rounded-lg items-center justify-center border ${fontScale === scale ? 'bg-red-600 border-red-500' : 'bg-zinc-900/60 border-zinc-800'}`}
                  >
                    <Text className={`font-bold text-sm ${fontScale === scale ? 'text-white' : 'text-zinc-700'}`}>{scale}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View className="bg-zinc-900/40 border border-zinc-900 py-3 rounded-lg items-center">
