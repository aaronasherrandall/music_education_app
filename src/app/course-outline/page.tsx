'use client'

import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaMusic, FaMicrophone, FaHeadphones, FaGuitar } from "react-icons/fa"

const modules = [
  { id: 1, title: 'Melody Mastery', icon: FaMicrophone, color: 'text-blue-500', route: '/melody-module' },
  { id: 2, title: 'Rhythm Basics', icon: FaMusic, color: 'text-green-500', route: '/rhythm-module' },
  { id: 3, title: 'Harmony Heroes', icon: FaHeadphones, color: 'text-purple-500', route: '/harmony-module' },
  { id: 4, title: 'Composition Craft', icon: FaGuitar, color: 'text-red-500', route: '/composition-module' },
];

export default function CourseOutlineScreenComponent() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Music Education App
        </h1>
        <div className="space-y-4">
          {modules.map((module) => (
            <Card key={module.id} className="overflow-hidden">
              <Link href={`${module.route}/1`} className="block">
                  <CardContent className="p-4 flex items-center">
                  <div className={`w-12 h-12 rounded-full ${module.color} bg-opacity-20 flex items-center justify-center mr-4`}>
                    <module.icon className={`text-2xl ${module.color}`} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold text-gray-800">{module.title}</h2>
                    <p className="text-sm text-gray-500">Level {module.id}</p>
                  </div>
                  <Button variant="ghost" className={`${module.color} hover:${module.color} hover:bg-opacity-20`}>
                    Start
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
